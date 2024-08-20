import express from "express";
import { createUser, loginUser } from "../controllers/user-auth.js";
const route = express.Router();

route.post('/create' , createUser);

route.post('/login' , loginUser);


export default route;