import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/fields/Input";
import {Link} from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";
import FormWrapper from "../../components/wrappers/FormWrapper";
import { useGetSingleUserQuery, useUpdateUserMutation } from "../../redux/services/userServices";
import { useAuthForm } from "../../hooks/authForm";
import { useEffect, useRef, useState } from "react";
import { updateStateUserName } from "../../redux/slices/authSlice";
import { errorAlert, successAlert } from "../../utils/alerts";
import { Helmet } from "react-helmet-async";
import Button from "../../components/buttons/Button";
import { isValidURL } from "../../utils/dateFormat";

const Profile = () => {
    const user = useSelector((state) => state.slack_auth.userCreds);
    const {data} = useGetSingleUserQuery()
    const {endUserData, changeData  , setInitialData} = useAuthForm();
    const [updateUser] = useUpdateUserMutation();
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const [displayImg , setDisplayImg] = useState(null);
    
    useEffect(() => {
        if(data) {
            setInitialData({
                username: data?.user?.username,
                status: data?.user?.status || '',
                image: data?.user?.profileImage
            })
        }
    }, [data])

    //function to trigger ref of current instance of useRef
    const handleDivAreaclick = () => {
        inputRef.current.click()
    }

    const onImagechange = (e) => {
        if(e.target.files && e.target.files[0]) {
            setDisplayImg(URL.createObjectURL(e.target.files[0]));
            changeData(e)
        }
    }

    const handleUpdate = async(e) => {
        e.preventDefault();
        
        try {

            if(endUserData.username.trim() === '' || !endUserData.status || !endUserData.image) return errorAlert('Invalid');

            const formData = new FormData();
            formData.append('username' , endUserData.username);
            formData.append('status' , endUserData.status);
            if(endUserData.image) formData.append('image' , endUserData.image);
            
            const response = await updateUser(formData).unwrap();
            dispatch(updateStateUserName(response?.name));
            successAlert(response?.message);

        } catch (error) {
            errorAlert(error?.data?.error || error?.error);
        }
    }

    return(
        <>  
            <Helmet>
                <title>{user?.name} - Profile Settings</title>
            </Helmet>
            <FormWrapper>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold truncate">{user?.name} 's Profile</h2>
                    <Link to={'/home'} className="bg-purple-100 p-2 rounded-full cursor-pointer shadow-md">
                        <IoReturnUpBack size={20}/>
                    </Link>
                </div>

                <div onClick={handleDivAreaclick} className="flex justify-center mb-6">
                    {displayImg ? (
                        <img src={displayImg} 
                        alt="profile" 
                        className="w-24 h-24 bg-gray-300 rounded-full"/>
                    ) : (
                        <img src={
                            isValidURL(data?.user?.profileImage) ?
                                data?.user?.profileImage
                            :
                                import.meta.env.VITE_COMMON_URL+data?.user?.profileImage
                        } 
                        alt="Profile" className="w-24 h-24 bg-gray-300 rounded-full"/>
                    )}
                </div>

                <input ref={inputRef} type="file" hidden accept="image/*" onChange={onImagechange} name="image" />

                {/* Input Fields */}
                <form encType="multipart/form-data" onSubmit={handleUpdate} className="space-y-4">
                    <Input
                        isSelect={true}
                        isSelectAndUser={false}
                        selectTitle={'User Status'}
                        label={'Update Profile Status'}
                        name={'status'}
                        value={endUserData.status}
                        onChange={changeData}
                    />
                    <Input
                        label={'User Name'}
                        name={'username'}
                        value={endUserData.username}
                        onChange={changeData}
                    />
                    <Input
                        label={'Your Email'}
                        name={'email'}
                        value={data?.user?.email}
                        disabled
                        title={'Email Update not possible'}
                    />
                    <Button btnText={'Update'} type={'submit'} />
                </form>
            </FormWrapper>
        </>
    )
};

export default Profile;