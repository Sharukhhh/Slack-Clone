import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";

const ListTitle = ({title , onClick , isToggled}) => {
    return (
        <>
        <div onClick={onClick} title="Click" className="flex justify-between p-1 items-center cursor-pointer hover:bg-violet-100 hover:bg-opacity-30">
            <p className="mb-3">{title}</p>
            {isToggled ? <IoIosArrowDown size={18}/> : <IoIosArrowUp size={18}/>}
        </div>
        </>
    )
};

export default ListTitle;