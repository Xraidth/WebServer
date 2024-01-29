import { Router } from "express";
import blogGetAllController from "../controllers/blogGetAllController.js";
import blogPublishController from "../controllers/blogPublishController.js";
//import blogProfileController from "../controllers/blogProfileController.js";

//Imports de validaciones

const blogRouter = Router();
//Metodos con sus verbos

blogRouter.get('/getAll', blogGetAllController)
blogRouter.post('/publish', blogPublishController);
//blogRouter.get('/profile',blogProfileController);
// blogRouter.patch(blogUpdateController);
// blogRouter.delete(blogDeleteController);

export default blogRouter;




