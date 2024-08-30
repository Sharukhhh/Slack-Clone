import { FaArrowCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WorkspaceHomeCard = ({data}) => {
    const currentUser = useSelector((state) => state.slack_auth.userCreds);
    const navigate = useNavigate()
    const navigateToWorkSpace = (workSpaceId) => {
        navigate(`/workspace/${workSpaceId}`);
    }

    return (
        <>
            <div className="flex justify-between items-center p-3 bg-slate-100-100 bg-opacity-50 shadow-md rounded-lg" title="Select">
                <div className="flex flex-col">
                    <span className="text-lg font-medium truncate">{data?.workSpace_Name}</span>
                    {currentUser?.id === data.creator?._id ? (
                        <span>
                            You created
                        </span>
                    ) : (
                        <span>You were added</span>
                    )}
                </div>
                
                <button onClick={() => navigateToWorkSpace(data?._id)} className="flex cursor-pointer items-center px-4 py-2 text-sm font-medium text-white bg-violet-900 rounded-lg">
                    Open <FaArrowCircleRight className="ml-2"/>
                </button>
            </div>
        </>
    )
};

export default WorkspaceHomeCard;