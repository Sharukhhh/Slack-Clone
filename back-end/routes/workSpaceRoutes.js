import express from "express";
import { addNewChannelToWorkSpace, createWorkSpaceandDefaultChannel } from "../controllers/user/workspace-management.js";
const route = express.Router();

route.post('/new_workspace' , createWorkSpaceandDefaultChannel);

route.post('/new_channel' , addNewChannelToWorkSpace);

export default route;