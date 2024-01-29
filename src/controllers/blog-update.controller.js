
import { updateBlog} from "../data/blog/dataBlog.js";
const blogUpdateController = (req, res)=>{
const {id, title, body, email} = req.body; 
try{
    updateBlog(id, title, body, email).then(results=>{
        
        res.status(200).send("blog updated");
        })
    .catch(error=>{console.log(error);});
}
catch{
    return res.status(404).send('There was a connection error with blog database');
}      
};
export default blogUpdateController;
