const DMlist = ({members}) => {
    return (
        <>
            <div className="text-white opacity-60 my-4 ms-4">
                <p className="mb-3">Direct Messages</p>
                {members?.length > 0 && (
                    members?.map((user) => (
                        <div key={user?._id} className="flex space-x-2 p-2 items-center my-2 cursor-pointer hover:bg-violet-100 hover:bg-opacity-30">
                            {user?.profileImage ? (
                                <img src={user?.profileImage} 
                                alt="profile" className="w-10 h-10" />
                            ) : (
                                <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" 
                                alt="profile" className="w-10 h-10" />
                            )}
                            <span>{user?.username}</span>
                        </div>
                    ))
                )}
            </div>
        </>
    )
};


export default DMlist;