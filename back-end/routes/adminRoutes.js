import express from "express";
import { adminLogin, adminSignUp } from "../controllers/admin/admin-auth.js";
import { dashboardInfos, fetchAllSpaces, getAllUsers, getIndividualUserDetailAndInvolvedSpaces } from "../controllers/admin/admin-management.js";
import { verifyUser } from "../middlewares/authMiddleware.js";
const route = express.Router();

route.post('/auth/signup' , adminSignUp);

route.post('/auth/login' , adminLogin);

route.get('/spaces' , verifyUser, fetchAllSpaces);

route.get('/users' , verifyUser, getAllUsers);

route.patch('/user/:id' , verifyUser, getIndividualUserDetailAndInvolvedSpaces);

route.get('/dashboard_info' , verifyUser, dashboardInfos);

export default route;