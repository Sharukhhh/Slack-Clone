

export const errorHanlder = async (err , req, res , next) => {
    console.log(err);
    return res.status(500).json({error: 'Internal Server Error'});
}