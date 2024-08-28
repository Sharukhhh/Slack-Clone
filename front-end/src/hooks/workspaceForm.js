import { useState } from "react"

export const useDetailsForm = () => {

    const [workSpaceDetails , setWorkSpaceDetails] = useState({
        workSpaceName: '',
        description: '',
        channelName: '',
        users: []
    });

    const changeData = (e) => {
        const {name , value} = e.target;
        setWorkSpaceDetails(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const addSelectedUser = (userId , email) => {
        if(!workSpaceDetails.users.some((user) => user.id === userId)) {
            setWorkSpaceDetails(prev => ({
                ...prev,
                users: [...prev.users , {id: userId , email}]
            }))
        }
    }

    const removeSelectedUser = (userId) => {
        setWorkSpaceDetails(prev => ({
            ...prev,
            users: prev.users.filter((user) => user.id !== userId)
        }));
    }

    const resetData = () => {
        setWorkSpaceDetails({
            workSpaceName: '',
            channelName: '',
            description: '',
            users: []
        })
    }

    return {
        workSpaceDetails , changeData, addSelectedUser, removeSelectedUser , resetData
    }
}