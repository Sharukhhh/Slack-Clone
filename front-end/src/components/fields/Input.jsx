import React from "react";

const Input = ({label , isSelect, selectTitle, isSelectAndUser, selectData, ...props}) => {

    console.log(selectData?.users);

    return (
        <div>  
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor={'label'}>{label}</label>
            {isSelect ? (
                <select name="" 
                {...props} 
                className="w-full p-2.5 border border-purple-200 rounded focus:outline-none focus:ring focus:border-purple-500 bg-white"
                >
                    <option value="">{selectTitle}</option>
                    {!isSelectAndUser ? (
                        <React.Fragment>
                            <option value="In a meeting">In a meeting</option>
                            <option value="Away">Away</option>
                            <option value="Busy">Busy</option>
                            <option value="Available">Available</option>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                        {selectData?.users?.map((user) => (
                            <option key={user?._id} value={JSON.stringify({id: user?._id , email: user?.email})}>
                                {user?.email}
                            </option>
                        ))}
                        </React.Fragment>
                    )}
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