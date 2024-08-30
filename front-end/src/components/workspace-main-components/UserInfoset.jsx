import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const UserInfoset  = ({ users, isFirst , isSecond, msg , sender}) => {

    const currUser = useSelector((state) => state.slack_auth.userCreds);
    const user = users?.find((usr) => usr?._id === currUser?.id);
    
    return (
        <>  
            <div className="py-3 px-2 flex space-x-2">
                
                {isFirst ? (
                    <>
                        <img src={user?.profileImage} 
                        alt="Profile" className='w-10 h-10 rounded-lg' />
                        <span className="font-bold cursor-pointer">{user?.username}</span>
                        <IoIosArrowDown className="cursor-pointer" size={20}/>
                    </>
                ): isSecond ? (
                    <>
                        <img src={user?.profileImage} 
                        alt="Profile" className='w-10 h-10 rounded-lg' />
                        <div className="flex flex-col space-y-1">
                            <span className="font-bold">{user?.username}</span>
                            <span className="font-light">{msg}</span>
                        </div>
                        {/* <span className="font-extralight">9:16 AM</span> */}
                        <hr className="bg-slate-400"/>
                    </>
                ) : (
                    <>
                        <img src={sender?.profileImage} 
                        alt="Profile" className='w-10 h-10 rounded-lg' />
                        <div className="flex flex-col space-y-1">
                            <span className="font-bold">{sender?.username}</span>
                            <span className="font-light">{msg}</span>
                        </div>
                        {/* <span className="font-extralight">9:16 AM</span> */}
                        <hr className="bg-slate-400"/>
                    </>
                )}
            </div>
        </>
    )
};


export default UserInfoset;