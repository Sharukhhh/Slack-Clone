import { useState } from "react"


export const useAuthForm = () => {

    const [endUserData , setEndUserData] = useState({
        username: '',
        email: '',
        password: '',
        status: '',
        image: null
    });

    const changeData = (e) => {
        const {name , value , files} = e.target;

        if(files) {
            setEndUserData(prev => ({
                ...prev,
                image: files[0]
            }))

        } else {
            setEndUserData(prev => ({
                ...prev,
                [name]: value
            }))
        }    
    };

    const setInitialData = (initialData) => {
        setEndUserData(initialData);
    }

    return {
        endUserData , changeData , setInitialData
    }
}