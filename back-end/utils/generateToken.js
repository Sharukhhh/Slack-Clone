import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export const generateToken = async (userId , tokenMode) => {

    let token ;

    if(tokenMode === 'access') {
        token = await jwt.sign({userId} , process.env.SECRET , {expiresIn : '1hrs'});
    } else {
        token = await jwt.sign({userId} , process.env.REFRESH_SECRET , {expiresIn : '6hrs'});
    }

    return token;
}