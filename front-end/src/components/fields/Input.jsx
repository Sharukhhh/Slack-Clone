const Input = ({label , ...props}) => {
    return (
        <div>  
            <label className="mb-2" htmlFor={'label'}>{label}</label>
            <input {...props}
            required
            className="w-full px-3 py-2 border border-purple-200 rounded focus:outline-none focus:ring focus:border-purple-500"/>
        </div>
    )
};


export default Input;