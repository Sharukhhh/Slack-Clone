import {socket} from '../../socket';
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import UserInfoset from "../../components/workspace-main-components/UserInfoset";
import ChatInputBox from "../../components/workspace-main-components/ChatInputBox";
import Sidebar from "../../components/sidebar/Sidebar";
import WorkspaceNav from "../../components/workspace-main-components/WorkspaceNav";
import { useParams } from "react-router-dom";
import { useGetMessagesForChannelQuery, useGetWorkspaceRelatedToIDQuery } from "../../redux/services/userServices";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Workspace = () => {
    const user = useSelector((state) => state.slack_auth.userCreds);
    const [isSocketConnected , setIsSocketConnected] = useState(socket.connected);
    const {workSpaceId} = useParams();
    const {data} = useGetWorkspaceRelatedToIDQuery(workSpaceId);
    const [selectedChannel  , setSelectedChannel] = useState('');    
    const {data: msgData} = useGetMessagesForChannelQuery(selectedChannel);

    useEffect(() => {
        const onConnect = () => {
            setIsSocketConnected(true);
        }

        const onDisconnect = () => {
            setIsSocketConnected(false);
        }

        socket.on('connect' , onConnect);
        socket.on('disconnect' , onDisconnect);

        return () => {
            socket.off('connect' , onConnect);
            socket.off('disconnect' , onDisconnect);
        }
    } , []);

    useEffect(() => {
        if(data) handleChannelSelect(data?.workSpace?.channels[0]?.channel_Title);
    },[])

    //cb function to update selectedChannel state with specific channelId
    const handleChannelSelect = (channelId) => setSelectedChannel(channelId);

    //Function to find out the required channel from channel list using channelId
    const currentChannel = data?.workSpace?.channels.find((channel) => channel?._id === selectedChannel);
    
    
    return (
        <>
            <WorkspaceNav title={data?.workSpace?.workSpace_Name}/>
            <div className="flex h-screen">

                {/* Sidebar */}
                <Sidebar data={data?.workSpace} onSelectChannel={handleChannelSelect}/>

                {/* Chat UI */}
                <div className="bg-white p-3 w-3/4 h-full flex flex-col  space-y-5">
                    <div className="flex p-3 justify-between items-center">
                        <UserInfoset users={data?.workSpace?.members}  isFirst={true}  />
                        <HiOutlineDocumentPlus size={22}/>
                    </div>
                    <p className="text-slate-400 font-semibold cursor-pointer">+ Add a Bookmark</p>

                    <hr className="bg-slate-400"/>
                    
                    <div className="overflow-y-auto space-y-3">
                        <div className="py-3 px-2 flex items-center space-x-2">
                            {/* <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" 
                            alt="profile" className="w-20 h-20 rounded-lg"/> */}
                            <span className="font-bold text-xl md:text-3xl">
                                Welcome to the #{currentChannel?.channel_Title} Channel
                            </span>
                            {/* <span className="rounded-full bg-green-600 w-2 h-2"></span> */}
                        </div>

                        {/* <p className="">This conversation is just between user and you. Check out their profiles to learn more about them</p> */}
                        {/* <button className="px-4 py-2 border border-black cursor-pointer w-fit hover:bg-purple-900 hover:text-white hover:border-white">View Profile</button> */}

                        <hr className="bg-slate-400"/>
                                      
                        <UserInfoset 
                            isSecond={true}
                            users={data?.workSpace?.members} 
                            msg={`${user?.name} joined #${currentChannel?.channel_Title}!`}
                        />
                        {msgData?.messages?.length > 0 && (
                            msgData?.messages?.message?.map((msg) => (
                                <>
                                    <UserInfoset
                                        key={msg?._id}
                                        sender={msg?.sender}
                                        msg={msg?.body}
                                    />
                                </>
                            ))
                        )}
                    </div>
                    <ChatInputBox 
                        channelId={currentChannel?._id}
                    />
                </div>
            </div>
        </>
    )
};

export default Workspace;