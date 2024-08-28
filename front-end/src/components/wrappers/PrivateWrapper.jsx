import { useSelector } from 'react-redux';
import {Outlet , Navigate} from 'react-router-dom'

const Protected = () => {

    const user = useSelector((state) => state.slack_auth.userCreds);

    return user ? <Outlet/> : <Navigate to={'/signin'}/>
};

export default Protected;