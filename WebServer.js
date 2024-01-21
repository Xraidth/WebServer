console.clear();
import createExpressServer from 'express';

const PORT = 3000;

const expressApp = createExpressServer()


expressApp.all("/cuenta/:idcuenta", (req,res)=>{
    console.log(req.params.idcuenta); //devuelve el id de lo que se pidio y si se contantena son objetos
    //req.headers
    //req.get
    //res.send("Tu cuenta personal"); la respuesta
    // res.status(401).send({
    //     errorMessage: "No autorizado"
    // });
})

expressApp.listen(PORT,()=>
console.log(`servidor levantado en el puerto ${PORT}`));




//verbos get all put delete post 