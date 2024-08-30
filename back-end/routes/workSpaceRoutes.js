import express from "express";
import { addNewChannelToWorkSpace, createWorkSpaceandDefaultChannel, fetchUsersWorkSpaces, getSpecificWorkspaceUsingID,  } from "../controllers/user/workspace-management.js";
import { verifyUser } from "../middlewares/authMiddleware.js";
const route = express.Router();

route.post('/new_workspace' , verifyUser, createWorkSpaceandDefaultChannel);

route.put('/new_channel' , verifyUser , addNewChannelToWorkSpace);

route.get('/fetch/all' , verifyUser , fetchUsersWorkSpaces);

route.get('/fetch/:id' , verifyUser , getSpecificWorkspaceUsingID)

export default route;