import express from "express";
import { addNewChannelToWorkSpace, createWorkSpaceandDefaultChannel } from "../controllers/user/workspace-management.js";
import { verifyUser } from "../middlewares/authMiddleware.js";
const route = express.Router();

route.post('/new_workspace' , verifyUser, createWorkSpaceandDefaultChannel);

route.post('/new_channel' , verifyUser , addNewChannelToWorkSpace);

export default route;