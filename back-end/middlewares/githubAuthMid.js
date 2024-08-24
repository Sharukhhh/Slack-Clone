export const githubAuth = async (req, res, next) => {
    try {
        const {code} = req.body;
        
        if(!code) {
            return;
        }

        const tokenResponse = await fetch('https://github.com/login/oauth/access_token'  , {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },

            body: JSON.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            }),
        });
        
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        console.log(accessToken , 'the access token');
        

        if(!accessToken) {
            return;
        }

        const userProfile = await fetch('https://api.github.com/user' , {
            headers : {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        const result = await userProfile.json();
        
        const {name , avatar_url , email} = result;

        const retrievedData = {
            name , avatar_url , email
        }

        req.user = retrievedData;
        next();

    } catch (error) {
        next(error);
    }
}