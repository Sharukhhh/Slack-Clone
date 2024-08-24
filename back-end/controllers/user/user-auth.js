import User from "../../models/users.js";
import { checkAndComparePassword, makeSecurePassword } from "../../utils/passwordUtils.js";
import { generateToken } from "../../utils/generateToken.js";
import { checkForExisingUser } from "../../utils/helpers.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { useRegisterUserMutation } from "../../../front-end/src/redux/services/userAuthService.js";
dotenv.config()


/*
    info: Manual User Registeration 
    route: /api/user/auth/create
    method: POST
*/
export const createUser = async (req, res , next) => {
    try {
        
        const {username , email , password} = req.body;

        if(!username || !email || !password) return res.status(400).json({error: 'Invalid credentails'});

        const existingUser = await checkForExisingUser(email , 'register');
        if(existingUser === false) return res.status(403).json({error: 'User Already Exists'});

        const hashedPassword = await makeSecurePassword(password)

        const user = await User.create({
            username , email , password: hashedPassword
        });

        return res.status(201).json({message: 'Account created'});

    } catch (error) {
        next(error)
    }
};



/*
    info: Manual User Login 
    route: /api/user/auth/login
    method: POST
*/
export const loginUser = async (req, res , next) => {
    try {
        const {email , password} = req.body;

        if(!email || !password) return res.status(400).json({error: 'Invalid credentials'});

        const existingUser = await checkForExisingUser(email , 'login');
        if(!existingUser) return res.status(404).json({error: 'User Not Found!'});


        const isValidPassword = await checkAndComparePassword(password , existingUser?.password);
        if(!isValidPassword) return res.status(400).json({error: 'Given Password does not match!'});

        const token = await generateToken(existingUser._id);

        const userData = {
            name: existingUser.username,
            id: existingUser._id
        }
        
        return res.setHeader('Authorization' , `Bearer ${token}`)
        .status(200).json({message: 'login successfull', userData });

    } catch (error) {
        next(error)
    }
}



/*
    info: Google User Signup
    route: /api/user/auth/google_signup
    method: POST
*/
export const googleOneTapSignUp = async (req, res , next) => {
    try {
        const data  = req.body.credential;
        
        const decodedData = await jwt.decode(data);

        const {name , email , picture , jti} = decodedData;

        const existingUser = await checkForExisingUser(email , 'register');
        if(existingUser === false) return res.status(403).json({error: 'User Already Exists'});

        await User.create({
            username: name,
            email,
            password: jti,
            profileImage: picture
        });

        return res.status(201).json({message: 'Account created'});
        
    } catch (error) {
        next(error);
    }
}



/*
    info: Google User Login
    route: /api/user/auth/google_login
    method: POST
*/
export const googleLogin = async (req, res , next) => {
    try {
        const data  = req.body.credential;
        
        const decodedData = await jwt.decode(data);

        const {email} = decodedData;

        const existingUser = await checkForExisingUser(email , 'login');
        if(!existingUser) return res.status(404).json({error: 'User not found'});

        const userData = {
            id: existingUser?._id , 
            name: existingUser?.username
        };

        const token = await generateToken(userData?._id);

        return res.setHeader('Authorization' , `Bearer ${token}`)
        .status(200).json({message: 'login successfull', userData });
        
    } catch (error) {
        next(error);
    }
}




export const githubSignup = async (req, res, next) => {
    try {
        const data = req.user;
        console.log(data , 'data ivide');
        
    } catch (error) {
        next(error);
    }
}