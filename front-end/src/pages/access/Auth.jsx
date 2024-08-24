import Input from "../../components/fields/Input";
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useAuthForm } from "../../hooks/authForm";
import {GoogleOAuthProvider } from '@react-oauth/google'
import { useRegisterUserMutation, useSiginUserMutation } from "../../redux/services/userAuthService";
import { useDispatch } from "react-redux";
import { setUserCred } from "../../redux/slices/authSlice";
import GoogleButton from "../../components/oauth-components/GoogleButton";
import GithubButton from "../../components/oauth-components/GithubButton";
import { errorAlert, successAlert } from "../../utils/alerts";

const Auth = ({isSignin}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {endUserData ,changeData} = useAuthForm();
    const [registerUser , {isLoading }] = useRegisterUserMutation();
    const [signinUser , {isLoading: isSignInLoading}] = useSiginUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            let response;

            if(isSignin) {
                response = await signinUser(endUserData).unwrap();
                console.log(response.message);
                dispatch(setUserCred(response.userData));
                successAlert(response.message);
            } else {
                
                response = await registerUser(endUserData).unwrap();
                successAlert(response.message);
                navigate('/signin');
            }
        } catch (error) {
            console.log(error);
            errorAlert(error?.data?.error || error?.error);
        }
    }

    return (
        <>  
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-2xl">
                        <div>
                            <h2 className="text-center text-3xl font-extrabold text-gray-900">
                                Slack - Clone
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                {isSignin ? 'Log In to your account' : 'Create your account'}
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            {isSignin ? (
                                <>
                                    <Input
                                        label={'Email'} 
                                        placeholder={'youremailid@gmail.com'}
                                        name={'email'}
                                        type={'email'}
                                        value={endUserData.email}
                                        onChange={changeData}
                                    />
                                    <Input
                                        label={'Password'} 
                                        placeholder={'********'}
                                        name={'password'}
                                        type={'password'}
                                        value={endUserData.password}
                                        onChange={changeData}
                                    />
                                </>
                            ) : (
                                <>
                                    <Input
                                        label={'Username'} 
                                        placeholder={'John Doe'}
                                        name={'username'}
                                        type={'name'}
                                        value={endUserData.username}
                                        onChange={changeData}
                                    />
                                    <Input
                                        label={'Email'} 
                                        placeholder={'youremailid@gmail.com'}
                                        name={'email'}
                                        type={'email'}
                                        value={endUserData.email}
                                        onChange={changeData}
                                    />
                                    <Input
                                        label={'Password'} 
                                        placeholder={'********'}
                                        name={'password'}
                                        type={'password'}
                                        value={endUserData.password}
                                        onChange={changeData}
                                    />
                                </>
                            )}
                            <button type="submit"
                            className="w-full py-2 px-4 text-white bg-purple-900 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                {isSignin ? 'LOGIN' : 'SIGNUP'}
                            </button>
                        </form>

                        <p className="text-center border-b font-bold text-xl">OR</p>
                        
                        <div className="space-y-4 flex flex-col justify-center items-center">
                            <GoogleButton isSignin={isSignin} />
                            {isSignin && (
                                <GithubButton  />
                            )}
                        </div>


                        {isSignin ? (
                            <p>New user? <Link className="hover:text-purple-900" to={'/'}>Create Account</Link></p>
                        ) : (
                            <p>Already a user? <Link className="hover:text-purple-900" to={'/signin'}>LogIn back</Link></p>
                        )}
                    </div>
                </div>
            </GoogleOAuthProvider>
        </>
    )
};


export default Auth;