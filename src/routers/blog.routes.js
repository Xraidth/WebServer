import { Router } from "express";
import blogGetAllController from "../controllers/blog-GetAll.controller.js";
import blogPublishController from "../controllers/blog-publish.controller.js";
import blogProfileController from "../controllers/blog-profile.controller.js";
import blogUpdateController from "../controllers/blog-update.controller.js";
import blogDeleteController from "../controllers/blog-delete.controller.js";
//Imports de validaciones

const blogRouter = Router();
//Metodos con sus verbos

blogRouter.get('/getAll', blogGetAllController)
blogRouter.post('/publish', blogPublishController); //falta controlar que el mail exista en la base y que me pasen el id como parametro y validarlo (ver profile que esta parecido)
blogRouter.get('/profile',blogProfileController);
blogRouter.patch('/update',blogUpdateController);
blogRouter.delete('/deleteOne',blogDeleteController);

export default blogRouter;




