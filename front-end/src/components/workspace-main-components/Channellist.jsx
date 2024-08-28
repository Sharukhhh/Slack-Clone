import { FaSquarePlus } from "react-icons/fa6";

const Channellist = ({channels}) => {
    return (
        <>
            <div className="text-white opacity-60 my-4 ms-4">
                <p className="mb-3">Channels</p>
                <ul className="space-y-2 cursor-pointer">
                    {channels?.length > 0 && (
                        channels?.map((channel) => (
                            <li className="p-2 hover:bg-violet-100 hover:bg-opacity-30" key={channel?._id}># {channel?.channel_Title}</li>
                        ))
                    )}
                </ul>
                <div className="flex space-x-2 items-center my-4 p-2 hover:bg-violet-100 hover:bg-opacity-30">
                    <FaSquarePlus/>
                    <span >Add Channel</span>
                </div>
            </div>
        </>
    )
};

export default Channellist;