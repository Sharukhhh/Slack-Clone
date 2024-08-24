import Input from "../../components/fields/Inpuf";
import {Link} from 'react-router-dom'
import { useAuthForm } from "../../hooks/authForm";

const Auth = ({isSignin}) => {
    const {endUserData ,changeData} = useAuthForm();
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            Slack - Clone
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            {isSignin ? 'Log In to your account' : 'Create your account'}
                        </p>
                    </div>
                    <form className="mt-8 space-y-6">
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

                    {isSignin ? (
                        <p>New user? <Link className="hover:text-purple-900" to={'/'}>Create Account</Link></p>
                    ) : (
                        <p>Already a user? <Link className="hover:text-purple-900" to={'/signin'}>LogIn back</Link></p>
                    )}
                </div>
            </div>
        </>
    )
};


export default Auth;