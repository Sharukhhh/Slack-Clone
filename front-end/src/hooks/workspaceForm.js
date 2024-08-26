import { useState } from "react"

export const useDetailsForm = () => {

    const [workSpaceDetails , setWorkSpaceDetails] = useState({
        workSpaceName: '',
        description: '',
        channelName: ''
    });

    const changeData = (e) => {
        const {name , value} = e.target;
        setWorkSpaceDetails(prev => ({
            ...prev,
            [name]: value
        }))
    };

    return {
        workSpaceDetails , changeData
    }
}