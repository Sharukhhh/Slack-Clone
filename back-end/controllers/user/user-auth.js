import User from "../../models/users.js";
import { checkAndComparePassword, makeSecurePassword } from "../../utils/passwordUtils.js";
import { generateToken } from "../../utils/generateToken.js";
import { checkForExisingUser } from "../../utils/helpers.js";



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

        return res.status(201).json({message: 'Account created' , user});

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


