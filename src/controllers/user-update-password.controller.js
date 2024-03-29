
import { compare, hash } from "bcrypt";
import UserModel from "../schemas/user.schema.js";
import {SignJWT}from 'jose';

const userUpdatePasswordController = async(req, res)=>{
    const {id} = req;
    const {oldpassword, newpassword}=req.body;
    const existingUserById = await UserModel.findById(id).exec();
    if(!existingUserById) return res.status(401).send('Usuario no autorizado'); 
    
    const checkPassword = await compare(oldpassword, existingUserById.password)
    if(!checkPassword)return res.status(401).send('Credenciales incorrectas');
    
    const hashedPassword = await hash(newpassword, 12);
    existingUserById.password = hashedPassword;
    await existingUserById.save();
    return res.send('Contraseña del usuario actualizada');


};
export default userUpdatePasswordController;