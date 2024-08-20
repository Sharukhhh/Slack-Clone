import express from "express";
import { createUser, loginUser } from "../controllers/user/user-auth.js";
import { editUserInfo } from "../controllers/user/user-management.js";
const route = express.Router();

route.post('/auth/create' , createUser);

route.post('/auth/login' , loginUser);

route.put('/edit/:id' , editUserInfo);


export default route;