import { useEffect } from "react"
import { useGithubSignupMutation } from "../../redux/services/userAuthService";
import { useNavigate } from "react-router-dom";

const GithubCallBack = () => {

    const navigate = useNavigate()
    const [githubSignup , {isLoading}] = useGithubSignupMutation()

    useEffect( () => {

        const githubAction = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
    
            if(code) {
                try {
                    const response = await githubSignup({code}).unwrap();
                    console.log(response);
                    navigate('/signin');
                    
                } catch (error) {
                    alert('error while github auth')
                }
            }
        }

        githubAction();

    } , []);

    return (
        <>
            <div className="flex justify-center items-center my-auto">
                Processing Github Authentication...........
            </div>
        </>
    )
}

export default GithubCallBack