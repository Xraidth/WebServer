
import { getOneBlogs, updateBlog} from "../data/blog/dataBlog.js";
import { compare } from "bcrypt";
import UserModel from "../schemas/user.schema.js";
import {SignJWT}from 'jose';

const blogUpdateController = async(req, res)=>{
const {id} = req;
console.log(id);
const existingUserById = await UserModel.findById(id).exec();
console.log(existingUserById);
if(!existingUserById) return res.status(401).send('Usuario no autorizado');
const {email} = existingUserById;
const {id_art, title, introduction, body, conclusion} = req.body; 

try{
    getOneBlogs(id_art).then(results=>{
        
        if(!results) return res.status(404).send({error:"Blog not found"});
        })
    .catch(error=>{console.log(error);});
}
catch{
    return res.status(404).send('There was a connection error with blog database');
}      



try{
    updateBlog(id_art, title, introduction, body, conclusion, email).then(results=>{
        
        
        res.status(200).send("blog updated");
        })
    .catch(error=>{console.log(error);});
}
catch{
    return res.status(404).send('There was a connection error with blog database');
}      
};
export default blogUpdateController;
