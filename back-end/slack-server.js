import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import {connectToDb} from "./database/connection.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHanlder } from "./middlewares/errorHandler.js";

const app = express();
app.use(cors());
app.use(morgan('dev'));   
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/user/auth' , userRoutes);

app.use(errorHanlder)

connectToDb();

app.listen(3000 , () => {
    console.log('Server on!');
})