import User from '../../models/users.js';
import Workspace from '../../models/workSpace.js'


/*
    info: All the informations needed to show on admin dashboard
    path: /api/admin/dashboard_info
    method: GET
*/
export const dashboardInfos = async (req, res, next) => {
    try {
        const totalUser = await User.countDocuments();
        const totalSpaces = await Workspace.countDocuments();

        return res.status(200).json({totalSpaces, totalUser});

    } catch (error) {
        next(error);
    }
}



/*
    info: To get complete data about a workspce for admins
    path: /api/admin/spaces
    method: GET
*/
export const fetchAllSpaces = async (req, res, next) => {
    try {
        const workspaces = await Workspace.find()
        .populate('creator')
        .populate('channels' , 'channel_Title').sort({createdAt: -1});

        if(!workspaces) return res.status(404).json({error: 'Data not found'});

        return res.status(200).json({workspaces});

    } catch (error) {
        next(error);
    }
}


/*
    info: To fetch all users info
    path: /api/admin/users
    method: GET
*/
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().sort({createdAt: -1});

        if(!users) return res.status(404).json({error: 'Users not found'});

        return res.status(200).json({users});

    } catch (error) {
        next(error);
    }
}


/*
    info: To get data of a single user
    path: /api/admin/user/:id
    method: GET
*/
export const getIndividualUserDetailAndInvolvedSpaces = async (req, res , next) => {
    try {
        const userId = req.params.id;

        const user = await User.findById(userId);
        if(!user) return res.status(404).json({error: 'User detail not found'});

        const workSpaces = await Workspace.find();

        const currentUsersWorkspace = workSpaces.filter((space) => space.members.find((member) => member.id === userId));

        return res.status(200).json({user , workSpaces , currentUsersWorkspace});

    } catch (error) {
        next(error);
    }
}



