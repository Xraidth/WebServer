
import { getAllBlogs } from "../data/blog/dataBlog.js";

const blogGetAllController =(req, res)=>{    
    try{
        getAllBlogs().then(results=>{
            
            res.status(200).send(results);
            })
        .catch(error=>{console.log(error);});
    }
    catch{
        return res.status(404).send('There was a connection error with blog database');
    }      
};

export default blogGetAllController;