import Admin from '../../models/admin.js';
import { generateToken } from '../../utils/generateToken.js';
import { checkForExisingUser } from '../../utils/helpers.js';
import { checkAndComparePassword, makeSecurePassword } from '../../utils/passwordUtils.js';


/*
    info: Admin signup
    route: /api/admin/auth/signup
    method: POST
*/
export const adminSignUp = async (req, res, next) => {
    try {
        
        const {name , email , role , password} = req.body;

        if(!name || !email || !role || !password) return res.status(400).json({error: 'Invalid Credentials'});

        const existingAdmin = await checkForExisingUser(email , 'register');
        if(existingAdmin === false) return res.status(403).json({error: 'User not found'});

        const hashedPassword = await makeSecurePassword(password);

        await Admin.create({
            adminName: name ,
            email,
            role, 
            password: hashedPassword
        });

        return res.status(201).json({message: 'Admin account created'});

    } catch (error) {
        next(error);
    }
};


/*
    info: Admin Login
    route: /api/admin/auth/login
    method: POST
*/
export const adminLogin = async (req, res , next) => {
    try {
        const {email , password} = req.body;

        if(!email || !password) return res.status(400).json({error: 'Invalid Credentials'});

        const existingAdmin = await checkForExisingUser(email , 'login');
        if(!existingAdmin) return res.status(404).json({error: 'User not found'});

        const validatePassword = await checkAndComparePassword(password , existingAdmin.password);
        if(!validatePassword) return res.status(400).json({error: 'Password does not match'});

        const adminData = {
            id: existingAdmin?._id,
            role: existingAdmin?.role
        }

        const token = await generateToken(existingAdmin?._id);

        return res.setHeader('Authorization' , `Bearer ${token}`)
        .status(200).json({message: 'success' , adminData});

    } catch (error) {
        next(error);
    }
}