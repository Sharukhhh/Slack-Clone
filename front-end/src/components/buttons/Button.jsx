const Button = ({btnText , ...props }) => {
    return (
        <>
            <button {...props} 
            className="py-2 px-4 text-white bg-purple-900 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                {btnText}
            </button>
        </>
    )
};

export default Button;