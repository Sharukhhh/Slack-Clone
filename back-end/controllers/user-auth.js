import User from "../models/users.js";
import { checkAndComparePassword, makeSecurePassword } from "../utils/passwordUtils.js";
import { generateToken } from "../utils/generateToken.js";



export const createUser = async (req, res , next) => {
    try {
        
        const {username , email , password} = req.body;

        if(!username || !email || !password) return res.status(400).json({error: 'Invalid credentails'});

        const hashedPassword = await makeSecurePassword(password)

        const user = await User.create({
            username , email , password: hashedPassword
        });

        return res.status(201).json({message: 'Account created' , user});

    } catch (error) {
        next(error)
    }
};


export const loginUser = async (req, res , next) => {
    try {
        const {email , password} = req.body;

        if(!email || !password) return res.status(400).json({error: 'Invalid credentials'});

        const existingUser = await User.findOne({email: email});
        if(!existingUser) return res.status(404).json({error: 'User Not Found!'});

        existingUser.status = 'online';

        const isValidPassword = await checkAndComparePassword(password , existingUser.password);
        if(!isValidPassword) res.status(400).json({error: 'Given Password does not match!'});

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


export const oneTapSignUp = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}