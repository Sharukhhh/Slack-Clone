import {Link} from 'react-router-dom'

const HomeButton = ({btnText , to, onClick}) => {
    return (
        <>
            <Link to={to}>
                <button onClick={onClick} className="w-full py-2 mb-4 px-4 font-bold text-white bg-purple-900 rounded-md hover:scale-95">
                    {btnText}
                </button>
            </Link>
        </>
    )
}


export default HomeButton;