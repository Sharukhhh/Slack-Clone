const Profile = () => {
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-6 border border-gray-300 rounded-lg bg-white">
                {/* Header with Title and Back Button */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Profile</h2>
                    <button className="text-blue-500 hover:text-blue-700">
                        Back
                    </button>
                </div>

                {/* User Image */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                    {/* <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    /> */}
                </div>

                {/* Submit Button */}
                {/* <div className="mt-6">
                    <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Update Profile
                    </button>
                </div> */}
            </div>
        </div>
        </>
    )
};

export default Profile;