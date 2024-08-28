import { useGetAllUsersQuery } from "../../redux/services/userServices";

const Input = ({label , isSelect, ...props}) => {
    const {data} = useGetAllUsersQuery();
    return (
        <div>  
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor={'label'}>{label}</label>
            {isSelect ? (
                <select name="" 
                {...props}
                className="w-full p-2.5 border border-purple-200 rounded focus:outline-none focus:ring focus:border-purple-500 bg-white"
                >
                    <option value="">Select User</option>
                    {data?.users?.map((user) => (
                        <option key={user?._id} value={JSON.stringify({id: user?._id , email: user?.email})}>
                            {user?.email}
                        </option>
                    ))}
                </select>
            ) : (
                <input {...props}
                required
                className="w-full px-3 py-2 border border-purple-200 rounded focus:outline-none focus:ring focus:border-purple-500"/>
            )}
        </div>
    )
};


export default Input;