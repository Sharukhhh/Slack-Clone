import Workspace from '../../models/workSpace.js';
import Channel from '../../models/channel.js'


/*
    info: To create a new workspace and associated channel to that workspace
    route: /api/workspace/new_workspace
    method: POST
*/
export const createWorkSpaceandDefaultChannel = async (req, res, next) => {
    try {
        const {workSpaceName , channelName , description} = req.body;
        const loggedUser = req.user;

        if(!workSpaceName || !channelName || !description) return res.status(400).json({error: 'Invalid Entries'});

        const workSpace = new Workspace({
            workSpace_Name: workSpaceName,
            creator: loggedUser._id
        });

        await workSpace.save();
        
        const channel = new Channel({
            channel_Title: channelName,
            description,
            workSpace: workSpace._id,
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
        const userIdArray = req.body.userIds;

        const workSpace = await Workspace.findOne({creator: req.user._id});
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


/*
    info: To fetch workspaces related to the user
    route: /api/workspace/fetch
    method: GET
*/
export const fetchUsersWorkSpaces = async (req, res, next) => {
    try {
        const loggedUser = req.user;

        const workSpaces = await Workspace.find({creator: loggedUser?._id});
        if(!workSpaces) return res.status(404).json({error: 'Workspaces not found'});

        return res.status(200).json({message: 'success' , workSpaces});

    } catch (error) {
        next(error);
    }
}