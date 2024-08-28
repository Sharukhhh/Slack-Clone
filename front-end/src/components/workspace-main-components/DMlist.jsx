import { useSelector } from "react-redux";
import { useToggleDisplay } from "../../hooks/displayHook";
import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";
import React from "react";
import ListTitle from "./ListTitle";

const DMlist = ({members}) => {
    const currUser = useSelector((state) => state.slack_auth.userCreds);
    const {isToggled , updateToggleState} = useToggleDisplay()

    return (
        <>
            <div className="text-white opacity-60 my-4">
                <ListTitle title={'Direct Messages'} onClick={updateToggleState} isToggled={isToggled}/>
                {isToggled && (
                    <React.Fragment>
                    {members?.length > 0 && (
                        members?.map((user) => (
                            <div key={user?._id} className={`flex space-x-2 p-2 items-center my-2 cursor-pointer ${currUser?.id !== user?._id ? 'hover:bg-violet-100 hover:bg-opacity-30' : ''}`}>
                                {user?.profileImage ? (
                                    <img src={user?.profileImage} 
                                    alt="profile" className="w-10 h-10" />
                                ) : (
                                    <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" 
                                    alt="profile" className="w-10 h-10" />
                                )}
                                <span className="truncate">
                                    {currUser?.id === user?._id ? `You` : `${user?.username}`}
                                </span>
                            </div>
                        ))
                    )}
                    </React.Fragment>
                )}
            </div>
        </>
    )
};

export default DMlist;