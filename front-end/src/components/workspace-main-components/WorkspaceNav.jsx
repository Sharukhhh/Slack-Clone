import { FaArrowLeft , FaArrowRight} from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoSearchOutline , IoTimeOutline } from "react-icons/io5";


const WorkspaceNav = ({title}) => {
    return (
        <>
            <nav className="bg-purple-900 p-2 w-full flex flex-row items-center justify-between">
                <div className="flex items-center justify-center space-x-6 md:mx-auto">
                    <FaArrowLeft color="white"/>
                    <FaArrowRight color="white"/>
                    <IoTimeOutline color="white"/>
                    <div className="border border-slate-100 rounded-xl px-2 py-2 flex items-center space-x-2 text-slate-100 sm:px-6">
                        <span>Search {title} </span>
                        <IoSearchOutline size={20}/>
                    </div>
                    <HiOutlineQuestionMarkCircle color="white"/>
                </div>
                <div className="flex me-4 items-center">
                    <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" 
                    alt="" className="w-8 h-8 rounded-md sm:w-10 sm:h-10" />
                </div>
            </nav>
        </>
    )
}

export default WorkspaceNav;