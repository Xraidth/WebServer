 import { getProfileBlogs } from "../data/blog/dataBlog.js";
import UserModel from "../schemas/user.schema.js";


 const blogProfileController = async(req, res)=>{
 const {id} = req;

 const existingUserById = await UserModel.findById(id).exec();
 if(!existingUserById) return res.status(401).send('User not autorized');

const {email} = existingUserById;

try{
    getProfileBlogs(email).then(results=>{
        
        res.status(200).send(results);
        })
    .catch(error=>{console.log(error);});
}
catch{
    return res.status(404).send('There was a connection error with blog database');
}      
};
export default blogProfileController;