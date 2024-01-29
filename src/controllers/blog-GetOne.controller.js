
import { getOneBlogs } from "../data/blog/dataBlog.js";

const blogGetOneController =(req, res)=>{    
    const {id_art} = req.body;

    try{
        getOneBlogs(id_art).then(results=>{
            
            res.status(200).send(results);
            })
        .catch(error=>{console.log(error);});
    }
    catch{
        return res.status(404).send('There was a connection error with blog database');
    }      
};

export default blogGetOneController;