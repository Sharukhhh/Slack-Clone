import { PiPlusSquareDuotone  , PiVideoCamera  ,PiCodeBlock} from "react-icons/pi";
import { IoText , IoSend , IoCodeSlashOutline } from "react-icons/io5";
import { BsEmojiSmile , BsListOl , BsListUl } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineAudio , AiOutlineItalic, AiOutlineStrikethrough } from "react-icons/ai";
import { FiBold } from "react-icons/fi";
import { LuLink } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { useSendMessageMutation } from "../../redux/services/userServices";
import { errorAlert, successAlert } from "../../utils/alerts";
import Emojipicker  from'emoji-picker-react'
import { useToggleDisplay } from "../../hooks/displayHook";
import ModalWrapper from "../wrappers/ModalWrapper";

const ChatInputBox = ({id}) => {
    const [inputMsg , setInputMsg] = useState('');
    const [sendMessage] = useSendMessageMutation();
    const {isToggled , updateToggleState} = useToggleDisplay();
    const fileRef = useRef(null);
    const emojiPickerRef = useRef(null);

    //reference of file input to + icon
    const handleFileClick = () => {
        fileRef.current.click();
    }

    //to handleEmoji selection
    const onEmojiClick = (emojiData , e) => {
        setInputMsg(prev => prev + emojiData.emoji);
        updateToggleState()
    }

    const handleMessageSubmission = async (e) => {
        e.preventDefault();

        try {
            if(inputMsg.trim() === '' || inputMsg.length === 0) return errorAlert('Invalid Input');
            
            const response = await sendMessage({message:inputMsg, id}).unwrap();
            successAlert(response?.message);
            setInputMsg('');
        } catch (error) {
             errorAlert(error?.data?.error || error?.error);
        }
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(emojiPickerRef.current && !emojiPickerRef.current.contains(e.target)) {
                updateToggleState();
            }
        }

        if(isToggled) document.addEventListener('mousedown' , handleClickOutside)
            else document.removeEventListener('mousedown' , handleClickOutside)

        return () => {
            document.removeEventListener('mousedown' , handleClickOutside);
        }
    }, [isToggled]);

    return (
        <>
            <div className="space-y-2 border border-gray-200 shadow-lg shadow-gray-300 rounded-xl p-3">
                <div className="p-4 bg-gray-100 flex space-x-3 text-gray-400 cursor-pointer">
                    <FiBold size={22}/>
                    <AiOutlineItalic size={22}/>
                    <AiOutlineStrikethrough size={22}/>
                    <LuLink size={22}/>
                    <BsListOl size={22}/>
                    <BsListUl size={22}/>
                    <IoCodeSlashOutline size={22}/>
                    <PiCodeBlock size={22}/>
                </div>
                <form onSubmit={handleMessageSubmission}>
                    <input type="text" name="message" placeholder="Type your message here" 
                    value={inputMsg} onChange={(e) => setInputMsg(e.target.value)}
                    className="px-4 py-4 text-gray-900 w-full shadow-md"/>

                    <div className="flex justify-between flex-wrap items-center p-2 ">
                        <div className="flex space-x-3 cursor-pointer truncate">
                            <PiPlusSquareDuotone onClick={handleFileClick} size={22} color="grey"/>
                            <IoText size={22} color="grey"/>
                            <BsEmojiSmile onClick={updateToggleState} size={22} color="grey"/>
                            <MdOutlineAlternateEmail size={22} color="grey"/>
                            <PiVideoCamera size={22} color="grey"/>
                            <AiOutlineAudio size={22} color="grey"/>
                        </div>
                        <button type="submit" className="cursor-pointer">
                            <IoSend size={22} color={inputMsg.length === 0 ? 'grey' : 'green'}/>
                        </button>
                    </div>
                </form>
            </div>

            {isToggled && (
                <ModalWrapper >
                    <div ref={emojiPickerRef}>
                        <Emojipicker 
                            emojiStyle="apple"
                            onEmojiClick={onEmojiClick}
                        />
                    </div>
                </ModalWrapper>
            )}

            <input type="file"  multiple accept="application/pdf" ref={fileRef} hidden />
        </>
    )
};

export default ChatInputBox;