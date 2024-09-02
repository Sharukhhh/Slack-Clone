import User from '../../models/users.js'
import Workspace from '../../models/workSpace.js';


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



/*
    info: To Get users who are not part of current workspace
    path: /api/user/fetch/not_member
    method: GET
*/
export const getUsersWhoAreNotInCurrentWorkspace = async (req, res, next) => {
    try {
        const workSpaceId = req.body;
        console.log(req.body , 'here');

        const workSpace = await Workspace.findById(workSpaceId).populate('members');
        if(!workSpace) return res.status(404).json({error: 'Workspace not found'});

        const users = await User.find();
        if(!users) return res.status(404).json({error: 'No data found'});

        const requiredUsers = users.filter((user) => user._id !== workSpace.members.map((member) => member._id));

        console.log(requiredUsers , 'required users');

        return res.status(200).json({users: requiredUsers});

    } catch (error) {
        next(error);
    }
}



/*
    info: 'For getting information about a single user'
    path: '/user/fetch/single
    method: GET
*/
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

