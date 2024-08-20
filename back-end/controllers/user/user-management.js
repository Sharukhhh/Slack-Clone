import User from '../../models/users.js'


/*
    info: Update an individual users data
    path: /api/user/edit/:id
    method: PUT
*/
export const editUserInfo = async (req, res, next) => {
    try {
        
        const userId = req.params.id;
        const {name , email , status } = req.body;

        if(!name || !email) return res.status(400).json({error: 'Invalid Entries'});

        const user = await User.findByIdAndUpdate(userId , {
            username: name,
            email,
            status
        } , {new: true});

        if(!user) return res.status(404).json({error: 'User not found'});

        return res.status(200).json({message: 'updated' , user})

    } catch (error) {
        next(error);
    }
}