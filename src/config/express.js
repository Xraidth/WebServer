import express  from "express";
import userRouter from "../routers/user.routes.js";
const expressApp = express();


//Todo los middlewares, routers

expressApp.use(express.json());

//Routers-------------------------------
expressApp.use('/user', userRouter);


export default expressApp;