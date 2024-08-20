import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export const generateToken = async (userId) => {

    const token = await jwt.sign({userId} , process.env.SECRET , {expiresIn : '1hrs'});
    return token;
}