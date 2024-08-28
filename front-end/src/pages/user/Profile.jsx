import { useSelector } from "react-redux";
import Input from "../../components/fields/Input";
import {Link} from 'react-router-dom'
import { IoReturnUpBack } from "react-icons/io5";
import FormWrapper from "../../components/wrappers/FormWrapper";

const Profile = () => {
    const user = useSelector((state) => state.slack_auth.userCreds);
    return(
        <>
            <FormWrapper>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">{user?.name} 's Profile</h2>
                    <Link to={'/home'} className="bg-purple-100 p-2 rounded-full cursor-pointer shadow-md">
                        <IoReturnUpBack size={20}/>
                    </Link>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                </div>

                    {/* Input Fields */}
                <div className="space-y-4">
                    <Input/>
                    <Input/>
                    <Input/>
                </div>

                    {/* <div className="mt-6">
                        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Update Profile
                        </button>
                    </div> */}
            </FormWrapper>
        </>
    )
};

export default Profile;