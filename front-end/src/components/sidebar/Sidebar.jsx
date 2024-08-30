import MenuSqaures from "../workspace-main-components/MenuSqaures";
import Channellist from "../workspace-main-components/Channellist";
import DMlist from "../workspace-main-components/DMlist";

const Sidebar = ({data , onSelectChannel}) => {
    return (
        <>
            <div className="bg-purple-950 w-1/4 h-full flex">
                <div className="w-1/4 flex flex-col p-2 items-center my-2">
                    <MenuSqaures title={''} isFirst={true}/>
                    <MenuSqaures title={'Home'}/>
                    <MenuSqaures title={"DM's"}/>
                    <MenuSqaures title={'Activity'}/>
                </div>

                {/* Vertical line */}
                <div className="border-l border-purple-500 border-opacity-30 border-2 my-2"></div>

                <div className="w-full flex flex-col p-2 ">
                    <div className="flex justify-between p-3">
                        <span className="font-bold md:text-xl text-white truncate">{data?.workSpace_Name}</span>
                    </div>

                    {/* Horizontal line below title */}
                    <div className="border-b border-purple-500 border-opacity-30 border-2 mt-2 mb-5"></div>

                    <div className="flex flex-col space-y-3 my-4 ms-4 cursor-pointer">
                        <p className="text-white opacity-60  hover:bg-violet-100 hover:bg-opacity-30">@ Threads</p>
                        <p className="text-white opacity-60 hover:bg-violet-100 hover:bg-opacity-30">Mentions & Reactions</p>
                        <p className="text-white opacity-60  hover:bg-violet-100 hover:bg-opacity-30">Saved Items</p>
                    </div>

                    <div className="overflow-y-auto">
                        <Channellist onSelectChannel={onSelectChannel} workspace={data} />
                        <DMlist members={data?.members} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;