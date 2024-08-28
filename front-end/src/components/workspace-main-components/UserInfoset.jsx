import { IoIosArrowDown } from "react-icons/io";

const UserInfoset  = ({ isFirst , msg}) => {
    return (
        <>  
            <div className="py-3 px-2 flex space-x-1">
                <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" 
                alt="Profile" className='w-10 h-10 rounded-lg' />
                {isFirst ? (
                    <>
                        <span className="font-bold">Username</span>
                        <IoIosArrowDown size={20}/>
                    </>
                ): (
                    <>
                        <div className="flex flex-col space-y-1">
                            <span className="font-bold">Username</span>
                            <span className="font-light">{msg}</span>
                        </div>
                        <span className="font-extralight">9:16 AM</span>
                    </>
                )}
            </div>
        </>
    )
};


export default UserInfoset;