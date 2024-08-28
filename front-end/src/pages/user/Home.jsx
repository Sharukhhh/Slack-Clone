import { useDispatch, useSelector } from "react-redux";
import HomeButton from "../../components/buttons/HomeButton";
import { removeCred } from "../../redux/slices/authSlice";
import WorkspaceHomeCard from "../../components/cards/WorkspaceHomeCard";
import { useFetchAllWorkSpaceQuery } from "../../redux/services/userServices";
import { useToggleDisplay } from "../../hooks/displayHook";
import { MdOutlineKeyboardDoubleArrowDown  , MdOutlineKeyboardDoubleArrowUp} from "react-icons/md";
import { useState } from "react";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.slack_auth.userCreds);
    const {data , isLoading } = useFetchAllWorkSpaceQuery();
    const {isToggled , updateToggleState} = useToggleDisplay();
    const [defaultCount , setDefaultCount] = useState(4);

    const handleSignOff = () => {
        dispatch(removeCred());
    }

    const handleToggleWorkSpaces = () => {
        updateToggleState();
        setDefaultCount(isToggled ? 4 : data?.workSpaces?.length)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center p-3 my-8">

                {/* Workspce creation and profile */}
                <div className="w-full p-6 space-y-6 bg-yellow-100 bg-opacity-40 md:p-7">
                    <div className="flex flex-col p-3 items-center justify-center space-y-4 md:space-x-4 md:space-y-0 md:flex-row md:mx-auto">
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <h3 className="text-4xl font-bold">Create Your Own Workspace, {user?.name}</h3>
                            <p className="my-2 text-base md:text-lg">
                                A platform where you can interact with your team. 
                                Click on the button below to create your workspace.
                            </p>
                            <div className="w-full space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
                                <HomeButton btnText={'Create Workspace'} to={'/workspace/add'} />
                                <HomeButton btnText={'Check your profile'} to={'/profile'}/>
                                <HomeButton btnText={'Logout'} onClick={handleSignOff} to={'/signin'}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User's Workspaces */}
                <div className="mt-8 p-4 w-full flex flex-col items-center">
                    <h3 className="text-center text-2xl font-semibold mb-6">
                        {data?.workSpaces?.length === 0 ? (
                            'You are not part of any Workspaces. Create One!'
                        ): (
                            'Your Workspaces'
                        )}
                    </h3>
                    {data?.workSpaces?.length !== 0 && (
                        <div className="w-full max-w-2xl border-2 border-gray-300 rounded-lg p-4 bg-white space-y-4">
                            <div className="space-y-7">
                                {data?.workSpaces?.slice(0 , defaultCount)?.map((wspace) => (
                                    <WorkspaceHomeCard key={wspace?._id} data={wspace} />
                                ))}
                            </div>
                            {data?.workSpaces?.length > 4 && (
                                <div className="flex justify-center items-center cursor-pointer p-4 space-x-2">
                                    <button type="button" className="px-2 py-2" onClick={handleToggleWorkSpaces}>
                                        {isToggled ? 'See Less' : 'See more'}
                                    </button>
                                    {isToggled ? (
                                        <MdOutlineKeyboardDoubleArrowUp size={20}/>
                                    ) : (
                                        <MdOutlineKeyboardDoubleArrowDown size={20}/>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
};


export default Home;