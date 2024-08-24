import express from "express";
import { createUser, githubSignup, googleLogin, googleOneTapSignUp, loginUser } from "../controllers/user/user-auth.js";
import { editUserInfo } from "../controllers/user/user-management.js";
import { verifyUser } from "../middlewares/authMiddleware.js";
import { githubAuth } from "../middlewares/githubAuthMid.js";
const route = express.Router();

route.post('/auth/create' , createUser);

route.post('/auth/login' , loginUser);

route.post('/auth/google_signup' , googleOneTapSignUp);

route.post('/auth/google_login' , googleLogin);

route.post('/auth/github_auth' , githubAuth , githubSignup)

route.put('/edit/' , verifyUser, editUserInfo);


export default route;