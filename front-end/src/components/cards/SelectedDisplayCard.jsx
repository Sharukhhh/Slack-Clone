const SelectedDisplayCard = ({users , removeUser}) => {
    
    return (
        <>
            {users?.length > 0 && (
                <div className="flex flex-wrap space-x-2 space-y-2">
                    {users?.map((user) => (
                        <div key={user?.id} className="flex justify-between items-center space-x-2 px-4 py-2 bg-gray-300 rounded-lg">
                            <span>{user?.email}</span>
                            <button type="button" onClick={() => removeUser(user.id)} className="bg-gray-400">X</button>
                        </div>
                    ))}
                </div>
            )}   
        </>
    )
};

export default SelectedDisplayCard;