const Input = ({label , ...props}) => {
    return (
        <div>  
            <label htmlFor={'label'}>{label}</label>
            <input {...props}
            className="w-full px-3 py-2 border border-purple-200 rounded focus:outline-none focus:ring focus:border-purple-500"/>
        </div>
    )
};


export default Input;