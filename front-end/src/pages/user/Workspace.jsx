import { HiOutlineDocumentPlus } from "react-icons/hi2";
import UserInfoset from "../../components/workspace-main-components/UserInfoset";
import ChatInputBox from "../../components/workspace-main-components/ChatInputBox";
import Sidebar from "../../components/sidebar/Sidebar";
import WorkspaceNav from "../../components/workspace-main-components/WorkspaceNav";
import { useParams } from "react-router-dom";
import { useGetWorkspaceRelatedToIDQuery } from "../../redux/services/userServices";


const Workspace = () => {
    const {workSpaceId} = useParams();
    const {data} = useGetWorkspaceRelatedToIDQuery(workSpaceId);
    
    return (
        <>
            <WorkspaceNav title={data?.workSpace?.workSpace_Name}/>
            <div className="flex flex-row h-screen">

                {/* Sidebar */}
                <Sidebar data={data?.workSpace} />

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
                            <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" 
                            alt="profile" className="w-20 h-20 rounded-lg"/>
                            <span className="font-bold text-xl">Username</span>
                            <span className="rounded-full bg-green-600 w-2 h-2"></span>
                        </div>

                        <p className="">This conversation is just between user and you. Check out their profiles to learn more about them</p>
                        <button className="px-4 py-2 border border-black cursor-pointer w-fit hover:bg-purple-900 hover:text-white hover:border-white">View Profile</button>

                        <hr className="bg-slate-400"/>

                        <UserInfoset msg={'Hello'}/>

                        <hr className="bg-slate-400"/>

                        <UserInfoset msg={'Hi bro'}/>

                        <hr className="bg-slate-400"/>

                        <UserInfoset msg={'comebackIndian'}/>
                    </div>
                    <ChatInputBox/>
                </div>
            </div>
        </>
    )
};

export default Workspace;