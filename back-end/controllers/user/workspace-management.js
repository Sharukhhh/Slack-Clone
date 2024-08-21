import Workspace from '../../models/workSpace.js';
import Channel from '../../models/channel.js'
import Notification from '../../models/notifications.js'


/*
    info: To create a new workspace and associated channel to that workspace
    route: /api/workspace/new_workspace
    method: POST
*/
export const createWorkSpaceandDefaultChannel = async (req, res, next) => {
    try {
        const {title , channelName , description} = req.body;

        if(!title || !channelName) return res.status(400).json({error: 'Invalid Entries'});

        const workSpace = new Workspace({
            workSpace_Name: title
        });

        await workSpace.save();
        
        const channel = new Channel({
            channel_Title: channelName,
            description,
            workSpace: workSpace._id
        });

        await channel.save();

        channel.workSpace = workSpace._id;
        workSpace.channels.push(channel._id);

        await workSpace.save()

        return res.status(201).json({message: 'created successfully!' , workSpace , channel});

    } catch (error) {
        next(error);
    }
}



/*
    info: To add a new channel to existing workspace
    route: /api/workspace/new_channel
    method: POST
*/
export const addNewChannelToWorkSpace = async (req, res, next) => {
    try {
        const {channelName , workSpaceId} = req.body;

        const workSpace = await Workspace.findById(workSpaceId);
        
        if(!workSpace) return res.status(404).json({error: 'Workspace not found'});

        const channel = new Channel({
            channel_Title: channelName,
            description,
            workSpace: workSpaceId
        });
        await channel.save();

        workSpace.channels.push(channel._id);
        await workSpace.save();

        return res.status(201).json({message: 'New Channel Added' , channel});

    } catch (error) {
        next(error);
    }
}


/*
    info: To add users to a workspace
    route: /api/workspace/add_user
    method: PATCH
*/
export const addUsersToWorkspace = async (req, res, next) => {
    try {
        const userIdArray = req.userIds;
        const workSpaceOwnerId = req.params.id;

        const workSpace = await Workspace.findOne({creator: workSpaceOwnerId});
        if(!workSpace) return res.status(404).json({error: 'Workspace not found'});
        
        for(let ids of userIdArray) {
            workSpace.members.push(ids);
        }
        await workSpace.save();

        return res.status(200).json({message: 'Added Successfully'});

    } catch (error) {
        next(error);
    }
}


