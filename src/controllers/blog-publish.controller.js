 

import { createBlog } from "../data/blog/dataBlog.js";
const blogPublishController = (req, res)=>{
const {title, body, email} = req.body; 
try{
    createBlog(title, body, email).then(results=>{
        
        res.status(200).send("blog created");
        })
    .catch(error=>{console.log(error);});
}
catch{
    return res.status(404).send('There was a connection error with blog database');
}      
};
export default blogPublishController;








