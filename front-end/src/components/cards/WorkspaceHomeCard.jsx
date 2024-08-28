import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WorkspaceHomeCard = ({data}) => {

    const navigate = useNavigate()
    const navigateToWorkSpace = (workSpaceId) => {
        navigate(`/workspace/${workSpaceId}`);
    }

    return (
        <>
            <div className="flex justify-between items-center p-3 bg-slate-100-100 bg-opacity-50 shadow-md rounded-lg" title="Select">
                <span className="text-lg font-medium">{data?.workSpace_Name}</span>
                <button onClick={() => navigateToWorkSpace(data?._id)} className="flex cursor-pointer items-center px-4 py-2 text-sm font-medium text-white bg-violet-900 rounded-lg">
                    Open <FaArrowCircleRight className="ml-2"/>
                </button>
            </div>
        </>
    )
};

export default WorkspaceHomeCard;