

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