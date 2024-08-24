import { useState } from "react"


export const useAuthForm = () => {

    const [endUserData , setEndUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const changeData = (e) => {
        const {name , value} = e.target;
        setEndUserData(prev => ({
            ...prev,
            [name]: value
        }))
    };

    return {
        endUserData , changeData
    }
}