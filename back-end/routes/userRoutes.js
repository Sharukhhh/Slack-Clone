import express from "express";
import { createUser, githubSignup, googleLogin, googleOneTapSignUp, loginUser } from "../controllers/user/user-auth.js";
import { editUserInfo, fetchAllUsers, fetchSingleUser, getUsersWhoAreNotInCurrentWorkspace } from "../controllers/user/user-management.js";
import { verifyUser } from "../middlewares/authMiddleware.js";
import { githubAuth } from "../middlewares/githubAuthMid.js";
import { upload } from "../utils/multer.js";
const route = express.Router();

route.post('/auth/create' , createUser);

route.post('/auth/login' , loginUser);

route.post('/auth/google_signup' , googleOneTapSignUp);

route.post('/auth/google_login' , googleLogin);

// route.post('/auth/github_auth' , githubAuth , githubSignup)

route.put('/edit/' , verifyUser, upload.single('image'), editUserInfo);

route.get('/fetch/all' , verifyUser , fetchAllUsers);

route.get('/fetch/single' , verifyUser , fetchSingleUser);

route.get('/fetch/not_member' , verifyUser , getUsersWhoAreNotInCurrentWorkspace);


export default route;