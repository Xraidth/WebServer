import express  from "express";
import userRouter from "../routers/user.routes.js";
import blogRouter from "../routers/blog.routes.js";

const expressApp = express();
const blogexpressApp = express();

//Todo los middlewares, routers

expressApp.use(express.json());
blogexpressApp.use(express.json());

//Routers-------------------------------
expressApp.use('/user', userRouter);
blogexpressApp.use('/blog', blogRouter);

export {
expressApp, 
blogexpressApp
};