import { errorAlert } from "./alerts";


export const authFormValidation = (userData , purpose) => {
    
    let result = true;
    if(purpose === 'signin') {

        if(userData?.email?.trim() === '' || userData?.password?.trim() === '') {
            result = false;
            return;
        }
        return result;

    } else {

        if(userData?.username?.trim() === '' || userData?.email?.trim() === '' || userData?.password?.trim() === '') {
            result = false;
            return;
        }
        return result;
    }
}


export const passwordValidation = (password) => {
    
}

export const validateWorkSpaceData = (data) => {

    if(data?.workSpaceName?.trim() === '' || data?.description?.trim() === '' 
    || data?.channelName?.trim() === '') {
        errorAlert('Invalid Entries');
        return false;
    }
    
    return true;
}