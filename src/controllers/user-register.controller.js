import { hash } from "bcrypt";
import UserModel from "../schemas/user.schema.js";

const userRegisterController = async(req, res)=>{
const {_id, name, surname, email, password} = req.body;

const existingUserById = await UserModel.findById(_id).exec();
if(existingUserById) return res.status(409).send('Ya existe usuario con ese _id registrado');

const existingUserByEmail = await UserModel.findOne({email}).exec();
if(existingUserByEmail) return res.status(409).send('Ya existe usuario con ese email registrado');

const hashedPassword = await hash(password, 12);

const user = new UserModel({
    _id, 
    name, 
    surname, 
    email,
    password:hashedPassword,
});
await user.save();
return res.status(201).send('Usuario registrado con éxito');

};
export default userRegisterController;