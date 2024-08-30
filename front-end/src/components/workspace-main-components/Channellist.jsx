import { FaSquarePlus } from "react-icons/fa6";
import { useToggleDisplay, useToggleModal } from "../../hooks/displayHook";
import ListTitle from "./ListTitle";
import AddChannelModal from "../modals/AddchannelModal";

const Channellist = ({workspace , onSelectChannel}) => {
    const {isToggled , updateToggleState} = useToggleDisplay();
    const {openModal , triggerModal} = useToggleModal();

    return (
        <>
            <div className="text-white opacity-60 my-4">
                <ListTitle title={'Channels'} onClick={updateToggleState} isToggled={isToggled} />
                {isToggled && (
                    <ul className="space-y-2 cursor-pointer">
                        {workspace?.channels?.length > 0 && (
                            workspace?.channels?.map((channel) => (
                                <li onClick={() => onSelectChannel(channel?._id)} className="p-1 hover:bg-violet-100 hover:bg-opacity-30" key={channel?._id}>
                                    # {channel?.channel_Title}
                                </li>
                            ))
                        )}
                    </ul>
                )}    
                <div onClick={triggerModal} className="flex space-x-2 items-center my-4 p-2 hover:bg-violet-100 hover:bg-opacity-30">
                    <FaSquarePlus/>
                    <span >Add Channel</span>
                </div>
            </div>

            {openModal && (
                <AddChannelModal workSpace={workspace} onClose={triggerModal} />
            )}
        </>
    )
};

export default Channellist;