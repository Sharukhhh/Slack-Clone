import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection_String = process.env.MONGO_CONNECTION_STRING;

export const connectToDb = async () => {
    try {
        await mongoose.connect(connection_String);
        console.log('connected to db');
    } catch (error) {
        console.log('Error while connection db' , error);
        
    }
}

