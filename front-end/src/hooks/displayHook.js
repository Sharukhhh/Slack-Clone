import { useState } from "react"

export const useToggleDisplay = () => {
    
    const [isToggled , setIsToggled] = useState(false);

    const updateToggleState = () => setIsToggled((prev) => !prev);

    return {
        isToggled , updateToggleState
    }
}