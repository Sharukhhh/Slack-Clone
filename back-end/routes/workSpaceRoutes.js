import express from "express";
import { addNewChannelToWorkSpace, createWorkSpaceandDefaultChannel, fetchUsersWorkSpaces,  } from "../controllers/user/workspace-management.js";
import { verifyUser } from "../middlewares/authMiddleware.js";
const route = express.Router();

route.post('/new_workspace' , verifyUser, createWorkSpaceandDefaultChannel);

route.post('/new_channel' , verifyUser , addNewChannelToWorkSpace);

route.post('/fetch' , verifyUser , fetchUsersWorkSpaces);

export default route;