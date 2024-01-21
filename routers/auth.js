import  {Router}  from "express";
import {USERS_BBDD} from '../users.js'
const authRouter = Router();




//endpoint publico
authRouter.get("publico",(req, res)=> res.send("Endpoint publico"));



//endpoint autentificado
authRouter.post("autentificado", (req,res)=>{

    const{email, password} = req.body;
    if(!email||!password) return res.send(400);

    const user = USERS_BBDD.find(x=> x.email === email)
    if(!user) return res.send(401);
    if(user.password !== password) return res.send(401);
    return res.send(`Usuario ${user.name} autentificado`)
});



//endpoint autorizado adm

authRouter.post("autorizado", (req,res)=>{

    const{email, password} = req.body;
    if(!email||!password) return res.send(400);

    const user = USERS_BBDD.find(x=> x.email === email)
    if(!user) return res.send(401);
    if(user.password !== password) return res.send(401);

    if(user.role !== 'admin') return res.send(403);
    res.send(`Usuario adm ${user.name} autentificado`)
});









export default authRouter;