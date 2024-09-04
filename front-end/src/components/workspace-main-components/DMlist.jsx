import { useSelector } from "react-redux";
import { useToggleDisplay ,useToggleModal } from "../../hooks/displayHook";
import React from "react";
import ListTitle from "./ListTitle";
import { FaSquarePlus } from "react-icons/fa6";
import AddModal from '../modals/AddModal'
import { isValidURL } from "../../utils/dateFormat";

const DMlist = ({workspace , onSelectUser}) => {
    const currUser = useSelector((state) => state.slack_auth.userCreds);
    const {isToggled , updateToggleState} = useToggleDisplay()
    const {openModal , triggerModal} = useToggleModal()

    return (
        <>
            <div className="text-white opacity-60 my-4">
                <ListTitle title={'Direct Messages'} onClick={updateToggleState} isToggled={isToggled}/>
                {isToggled && (
                    <React.Fragment>
                    {workspace?.members?.length > 0 && (
                        workspace?.members?.map((user) => (
                            <div key={user?._id} onClick={currUser?.id !== user?._id ? () => onSelectUser(user?._id): undefined}
                            className={`flex space-x-2 p-2 items-center my-2 cursor-pointer ${currUser?.id !== user?._id ? 'hover:bg-violet-100 hover:bg-opacity-30' : ''}`}>
                                {user?.profileImage ? (
                                    <img src={
                                        isValidURL(user?.profileImage) ? 
                                            user?.profileImage
                                        :
                                        import.meta.env.VITE_COMMON_URL+user?.profileImage
                                    } 
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

                {currUser?.id === workspace?.creator && (
                    <div onClick={triggerModal} className="flex space-x-2 items-center my-4 p-2 hover:bg-violet-100 hover:bg-opacity-30">
                        <FaSquarePlus/>
                        <span >Add Users</span>
                    </div>
                )}
            </div>

            {openModal && (
                <AddModal
                    forChannel={false}
                    workSpace={workspace}
                    onClose={triggerModal}
                />
            )}
        </>
    )
};

export default DMlist;