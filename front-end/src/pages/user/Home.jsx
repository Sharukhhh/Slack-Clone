import { useDispatch, useSelector } from "react-redux";
import HomeButton from "../../components/buttons/HomeButton";
import { removeCred } from "../../redux/slices/authSlice";
import { FaArrowCircleRight } from "react-icons/fa";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.slack_auth.userCreds)

    const handleSignOff = () => {
        dispatch(removeCred());
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
                                <br />
                                Click on the button below to create your workspace.
                            </p>
                            <div className="w-full space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
                                <HomeButton btnText={'Create Worksapce'} to={'/workspace/add'} />
                                {/* <HomeButton btnText={'Check your profile'} to={''}/> */}
                                <HomeButton btnText={'Logout'} onClick={handleSignOff} to={'/signin'}/>
                            </div>
                        </div>
                        {/* <img src="https://t3.ftcdn.net/jpg/09/00/95/84/360_F_900958457_cmvqQZnKOqt1Qm1XQkdZ6St22BuvUevc.jpg" 
                        alt="hero" className="w-40 h-28 object-cover sm:w-52 sm:h-36 md:w-60 md:h-40"/> */}
                    </div>
                </div>

                {/* Users previous Workspaces */}
                <div className=" mt-8 p-4">
                    
                </div>
            </div>
        </>
    )
};


export default Home;