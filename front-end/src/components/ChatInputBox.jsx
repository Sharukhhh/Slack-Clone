import { PiPlusSquareDuotone  , PiVideoCamera  ,PiCodeBlock} from "react-icons/pi";
import { IoText , IoSend , IoCodeSlashOutline } from "react-icons/io5";
import { BsEmojiSmile , BsListOl , BsListUl } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineAudio , AiOutlineItalic, AiOutlineStrikethrough } from "react-icons/ai";
import { FiBold } from "react-icons/fi";
import { LuLink } from "react-icons/lu";

const ChatInputBox = () => {
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
                <input type="text" name="" placeholder="message User" 
                className="px-4 py-4 text-gray-300 w-full shadow-md"/>

                <div className="flex justify-between flex-wrap items-center p-2 ">
                    <div className="flex space-x-3 cursor-pointer truncate">
                        <PiPlusSquareDuotone size={22} color="grey"/>
                        <IoText size={22} color="grey"/>
                        <BsEmojiSmile size={22} color="grey"/>
                        <MdOutlineAlternateEmail size={22} color="grey"/>
                        <PiVideoCamera size={22} color="grey"/>
                        <AiOutlineAudio size={22} color="grey"/>
                    </div>
                    <button type="submit" className="cursor-pointer">
                        <IoSend size={22} color="grey"/>
                    </button>
                </div>
            </div>
        </>
    )
};

export default ChatInputBox;