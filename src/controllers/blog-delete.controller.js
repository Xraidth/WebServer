import { deleteOneBlog} from "../data/blog/dataBlog.js";
const blogDeleteController = (req, res)=>{
const {id} = req.body; 
try{
    deleteOneBlog(id).then(results=>{
        
        res.status(200).send("blog deleted");
        })
    .catch(error=>{console.log(error);});
}
catch{
    return res.status(404).send('There was a connection error with blog database');
}      
};
export default blogDeleteController;
