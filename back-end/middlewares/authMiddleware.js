import User from '../models/users.js';
import Admin from  '../models/admin.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyUser = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];

        const token = authHeader.split(' ')[1];
        if(!token) return res.status(401).json({error: 'Unauthorized'});

        const decoded = jwt.verify(token , process.env.SECRET);
        if(!decoded) return res.status(401).json({error: 'Unauthorized'});

        let user;
        user = await User.findById(decoded.userId).select('username');

        if(!user) {
            user = await Admin.findById(decoded.userId).select('username');

            if(!user) return res.status(401).json({error: 'Unauthorized'});
        }

        req.user = user;
        next();

    } catch (error) {
        next(error);
    }
}