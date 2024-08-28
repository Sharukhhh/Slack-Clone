import { GoogleLogin } from "@react-oauth/google";import { useGoogleSignupMutation, useGooogleLoginMutation } from "../../redux/services/userAuthService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserCred } from "../../redux/slices/authSlice";
import { errorAlert, successAlert } from "../../utils/alerts";
 '@react-oauth/google'

const GoogleButton = ({isSignin}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [googleSignup ] = useGoogleSignupMutation();
    const [gooogleLogin ] = useGooogleLoginMutation()
    return (
        <>
        <GoogleLogin 
            type="standard"
            theme="filled_blue"
            size="medium"
            text={isSignin ? 'signin_with' : 'signup_with'}
            logo_alignment="center"
            shape="square"
            onSuccess={async (response) => {
                try {
                    let res;
                    if(isSignin) {
                        res = await gooogleLogin(response).unwrap();
                        dispatch(setUserCred(res.userData))
                        localStorage.setItem('slackUserToken' , res.token)
                        successAlert(res.message)
                        navigate('/home')
                        
                    } else {
                        res = await googleSignup(response).unwrap();
                        successAlert(res.message)
                        navigate('/signin')
                    }
                } catch (error) {
                    errorAlert(error?.data?.error || error?.error);
                }
            }}

            onError={error => {
                errorAlert('google authentication err');
                return;
            }}
        />
        </>
    )
}


export default GoogleButton;