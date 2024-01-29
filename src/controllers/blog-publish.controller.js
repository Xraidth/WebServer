 
import UserModel from "../schemas/user.schema.js";
import { createBlog } from "../data/blog/dataBlog.js";
const blogPublishController = async(req, res)=>{
const {title, introduction, body, conclusion} = req.body; 
const {id} = req;

const existingUserById = await UserModel.findById(id).exec();
if(!existingUserById) return res.status(401).send('User not autorized');

const {email} = existingUserById;
try{
    createBlog(title, introduction, body, conclusion, email).then(results=>{
        
        res.status(200).send("blog created");
        })
    .catch(error=>{console.log(error);});
}
catch{
    return res.status(404).send('There was a connection error with blog database');
}      
};
export default blogPublishController;








