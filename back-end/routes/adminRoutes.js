import express from "express";
import { adminLogin, adminSignUp } from "../controllers/admin/admin-auth.js";
import { fetchAllSpaces } from "../controllers/admin/admin-management.js";
const route = express.Router();

route.post('/auth/signup' , adminSignUp);

route.post('/auth/login' , adminLogin);

route.get('/spaces' , fetchAllSpaces);

export default route;