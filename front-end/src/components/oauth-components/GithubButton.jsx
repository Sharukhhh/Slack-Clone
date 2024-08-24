const GithubButton = () => {

    const loginWithgithub = () => {
        const clientID = import.meta.env.VITE_GITHUB_CLIENT_ID;
        const redirectURL = 'http://localhost:5173/github/callback';
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`;
    };
    

    

    return (
        <>
            <button type="button" onClick={loginWithgithub}
            className="w-auto py-1 px-4 font-semibold text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-600"
            >
                Login with Github
            </button>
        </>
    )
};

export default GithubButton;