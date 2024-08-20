import User from '../../models/users.js';
import Workspace from '../../models/workSpace.js'


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




