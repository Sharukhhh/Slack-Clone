

export const errorHanlder = async (err , req, res , next) => {
    console.log(err , '@error handler');
    return res.status(500).json({error: err.message});
}