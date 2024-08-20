

export const verifyUser = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        console.log(authHeader);

    } catch (error) {
        return res.status(500).json({error: error});
    }
}