import { FaSquarePlus } from "react-icons/fa6";
import { useToggleDisplay } from "../../hooks/displayHook";
import ListTitle from "./ListTitle";

const Channellist = ({workspace}) => {
    const {isToggled , updateToggleState} = useToggleDisplay()

    return (
        <>
            <div className="text-white opacity-60 my-4">
                <ListTitle title={'Channels'} onClick={updateToggleState} isToggled={isToggled} />
                {isToggled && (
                    <ul className="space-y-2 cursor-pointer">
                        {workspace?.channels?.length > 0 && (
                            workspace?.channels?.map((channel) => (
                                <li className="p-2 hover:bg-violet-100 hover:bg-opacity-30" key={channel?._id}># {channel?.channel_Title}</li>
                            ))
                        )}
                    </ul>
                )}    
                <div className="flex space-x-2 items-center my-4 p-2 hover:bg-violet-100 hover:bg-opacity-30">
                    <FaSquarePlus/>
                    <span >Add Channel</span>
                </div>
            </div>
        </>
    )
};

export default Channellist;