import User from '../../models/users.js'


/*
    info: Update an individual users data
    path: /api/user/edit
    method: PUT
*/
export const editUserInfo = async (req, res, next) => {
    try {
        
        const loggedUser = req.user;
        const {username ,  status } = req.body;

        if(!username || !status) return res.status(400).json({error: 'Invalid Entries'});

        const user = await User.findByIdAndUpdate(loggedUser._id , {
            username,
            status
        } , {new: true});

        if(!user) return res.status(404).json({error: 'User not found'});

        return res.status(200).json({message: `Updated ${user.username}` , name: user?.username})

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


export const fetchSingleUser = async (req, res, next) => {
    try {
        const loggedUser = req.user;

        const user = await User.findById(loggedUser?._id).select('username email status profileImage');
        if(!user) return res.status(404).json({error: 'User not found'});

        return res.status(200).json({message: 'success' , user});

    } catch (error) {
        next(error);
    }
}

