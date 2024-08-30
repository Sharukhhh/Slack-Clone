import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/fields/Input";
import {Link} from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";
import FormWrapper from "../../components/wrappers/FormWrapper";
import { useGetSingleUserQuery, useUpdateUserMutation } from "../../redux/services/userServices";
import { useAuthForm } from "../../hooks/authForm";
import { useEffect } from "react";
import { updateStateUserName } from "../../redux/slices/authSlice";
import { errorAlert, successAlert } from "../../utils/alerts";

const Profile = () => {
    const user = useSelector((state) => state.slack_auth.userCreds);
    const {data} = useGetSingleUserQuery()
    const {endUserData, changeData  , setInitialData} = useAuthForm();
    const [updateUser] = useUpdateUserMutation();
    const dispatch = useDispatch()

    useEffect(() => {
        if(data) {
            setInitialData({
                username: data?.user?.username,
                status: data?.user?.status || ''
            })
        }
    }, [data])

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {

            if(endUserData.username.trim() === '' || !endUserData.status) return errorAlert('Invalid');

            const response = await updateUser(endUserData).unwrap();
            dispatch(updateStateUserName(response?.name));
            successAlert(response?.message);

        } catch (error) {
            errorAlert(error?.data?.error || error?.error);
        }
    }

    return(
        <>
            <FormWrapper>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold truncate">{user?.name} 's Profile</h2>
                    <Link to={'/home'} className="bg-purple-100 p-2 rounded-full cursor-pointer shadow-md">
                        <IoReturnUpBack size={20}/>
                    </Link>
                </div>

                <div className="flex justify-center mb-6">
                    <img src={data?.user?.profileImage} alt="Profile" className="w-24 h-24 bg-gray-300 rounded-full"/>
                </div>

                {/* Input Fields */}
                <form onSubmit={handleUpdate} className="space-y-4">
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
                    <button className="w-fit px-4 py-2 text-white bg-violet-700 rounded-md hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-500">
                        Update 
                    </button>
                </form>
            </FormWrapper>
        </>
    )
};

export default Profile;