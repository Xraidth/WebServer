/*import  {Router}  from "express";
import {USERS_BBDD} from '../users.js'


const accountRounter = Router();

accountRounter.use((req,res,next)=>{
    console.log(req.ip);
    next();
})


//obtener GETONE
accountRounter.get('/:guid',(req,res)=>{
    const {guid} = req.params.guid
    const user = USERS_BBDD.find(x => x.guid == guid)
    
    if(!user) {
    console.log(`Usuario encontrado ${user}`)
    return res.status(404).send()}

    return res.send(user);
});
//crear
accountRounter.post('',(req,res)=>{
    const {guid, name} = req.body;

    if(!guid||!name) return res.status(400).send();
    const user = USERS_BBDD.find(x => x.guid == guid)

    if(user) {
    console.log(`Usuario no encontrado ${user}`)
    return res.status(409).send()}

    USERS_BBDD.push({
        guid,name
    })
    return res.send();

});
//actualizar
accountRounter.patch('/:guid',(req,res)=>{
    const {guid} = req.params.guid
    const {name} = req.body;
    if(!name) return res.state(400).send();
    const user = USERS_BBDD.find(x => x.guid == guid)
    
    

    
    if(!user) {
    console.log(`Usuario no encontrado ${user}`)
    return res.status(404).send()}

    user.name = name
    return res.send();

});
//eliminar
accountRounter.delete('/:guid',(req,res)=>{
    const {guid} = req.params.guid
    const userIndex = USERS_BBDD.findIndex(x => x.guid == guid)
    

    if(userindex === -1) {
    console.log(`Usuario no encontrado ${user}`)
    return res.status(404).send()}
    

    USERS_BBDD.slice(userIndex,1);
    return res.send();
});

export default accountRounter;*/