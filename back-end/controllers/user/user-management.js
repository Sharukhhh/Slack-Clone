import User from '../../models/users.js'


/*
    info: Update an individual users data
    path: /api/user/edit
    method: PUT
*/
export const editUserInfo = async (req, res, next) => {
    try {
        
        const loggedUser = req.user;
        const {name ,  status } = req.body;

        if(!name || !status) return res.status(400).json({error: 'Invalid Entries'});

        const user = await User.findByIdAndUpdate(loggedUser._id , {
            username: name,
            status
        } , {new: true});

        if(!user) return res.status(404).json({error: 'User not found'});

        return res.status(200).json({message: 'updated' , user})

    } catch (error) {
        next(error);
    }
}



/*
    info: Get All Users
    path: /api/user/fetch/all
    method: GET
*/
export const fetchAllUsers = async (req, res, next) => {
    try {
        const loggedUser = req.user;

        const users = await User.find({_id: {$ne: loggedUser?._id}}).select('username email');
        if(!users) return res.status(404).json({error: 'Data not found'});

        return res.status(200).json({message: 'success' , users});

    } catch (error) {
        next(error);
    }
}

