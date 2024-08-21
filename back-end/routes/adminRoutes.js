import express from "express";
import { adminLogin, adminSignUp } from "../controllers/admin/admin-auth.js";
import { dashboardInfos, fetchAllSpaces, getAllUsers, getIndividualUserDetailAndInvolvedSpaces } from "../controllers/admin/admin-management.js";
const route = express.Router();

route.post('/auth/signup' , adminSignUp);

route.post('/auth/login' , adminLogin);

route.get('/spaces' , fetchAllSpaces);

route.get('/users' , getAllUsers);

route.patch('/user/:id' , getIndividualUserDetailAndInvolvedSpaces);

route.get('/dashboard_info' , dashboardInfos);

export default route;