import express from "express";
import { createUser, loginUser } from "../controllers/user/user-auth.js";
import { editUserInfo } from "../controllers/user/user-management.js";
import { verifyUser } from "../middlewares/authMiddleware.js";
const route = express.Router();

route.post('/auth/create' , createUser);

route.post('/auth/login' , loginUser);

route.put('/edit/' , verifyUser, editUserInfo);


export default route;