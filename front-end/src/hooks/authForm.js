import { useState } from "react"


export const useAuthForm = () => {

    const [endUserData , setEndUserData] = useState({
        username: '',
        email: '',
        password: '',
        status: ''
    });

    const changeData = (e) => {
        const {name , value} = e.target;
        setEndUserData(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const setInitialData = (initialData) => {
        setEndUserData(initialData);
    }

    return {
        endUserData , changeData , setInitialData
    }
}