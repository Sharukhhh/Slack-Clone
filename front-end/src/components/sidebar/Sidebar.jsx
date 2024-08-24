import Channellist from "../Channellist";
import DMlist from "../DMlist";
import MenuSqaures from "../MenuSqaures";
import { RiEditBoxLine } from "react-icons/ri";

const Sidebar = () => {
    return (
        <>
            <div className="bg-purple-950 w-1/4 h-screen flex">
                <div className="w-1/4 flex flex-col p-2 items-center my-2">
                    <MenuSqaures title={''} isFirst={true}/>
                    <MenuSqaures title={'Home'}/>
                    <MenuSqaures title={"DM's"}/>
                    <MenuSqaures title={'Activity'}/>
                </div>

                <div className="border-l border-purple-500 border-opacity-30 border-2 my-2"></div>

                <div className="w-full flex flex-col p-2 ">
                    <div className="flex justify-between p-3">
                        <span className="font-bold md:text-xl text-white">Artifitia Solutions LLP</span>
                    </div>

                    <div className="border-b border-purple-500 border-opacity-30 border-2 mt-2 mb-5"></div>

                    <div className="flex flex-col space-y-3 ms-4">
                        <p className="text-white opacity-60">@ Threads</p>
                        <p className="text-white opacity-60">Mentions & Reactions</p>
                        <p className="text-white opacity-60">Saved Items</p>
                    </div>

                    <Channellist/>
                    <DMlist/>
                </div>
            </div>
        </>
    )
}

export default Sidebar;