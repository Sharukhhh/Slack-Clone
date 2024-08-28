// import {Link} from 'react-router-dom'

const MenuSqaures = ({title , isFirst}) => {
    return (
        <>
            {/* <Link> */}
                <span className={`w-12 h-12 bg-purple-700 bg-opacity-40 cursor-pointer rounded-md ${isFirst && 'mb-4'} hover:scale-95`}></span>
                <span className="font-medium mb-4 cursor-pointer text-white text-sm hover:scale-95">{title}</span>
            {/* </Link> */}
        </>
    )
};

export default MenuSqaures;