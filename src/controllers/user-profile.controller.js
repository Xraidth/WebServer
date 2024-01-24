import { compare } from "bcrypt";
import UserModel from "../schemas/user.schema.js";
import {SignJWT}from 'jose';

const userProfileController = async(req, res)=>{
const {id} = req;

const existingUserById = await UserModel.findById(id).exec();
if(!existingUserById) return res.status(401).send('Usuario no autorizado'); //Aca tira el error

const {_id, name, surname, email} = existingUserById;

return res.send({_id, name, surname, email})


};
export default userProfileController;