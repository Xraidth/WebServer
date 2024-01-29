// console.clear();
// import express from 'express';
// import dotenv from 'dotenv';
// //import accountRounter from './routers/account.js';
// //import authRouter from './routers/auth.js';
// dotenv.config(); // se puede definir otra ruta dentro 

// const PORT = process.env.PORT; //3000

// const expressApp = express()


// //-------------Middlewares-------------------// 
// expressApp.use(express.json())   //Parsea las solicitudes a json (lo que venga a json)
//expressApp.use(express.text()) //Convierte lo que venga a texto 
//expressApp.use("/account",accountRounter);
//expressApp.use("/auth", authRouter);
///---------------------------------------------------------------


// expressApp.post("/cuenta/:idcuenta", (req,res)=>{
//     //console.log(req.params.idcuenta); //devuelve el id de lo que se pidio y si se contantena son objetos
//     //req.headers
//     //req.get
//     //res.send("Tu cuenta personal"); la respuesta
//     // res.status(401).send({
//     //     errorMessage: "No autorizado"
//     //console.log(req.query); //Muestra los parametros de la queery como un objeto
//     // });
//     console.log(req.body);
//     res.send();

// })

// expressApp.put("/producto/:idcuenta",(req,res)=>{
//     console.log(req.body);
//     res.send();
// });




// expressApp.listen(PORT,()=>
// console.log(`servidor levantado en el puerto ${PORT}`));




//verbos get all put delete post 
///---------------------------------------------------------------------------------------------
console.clear();
import './config/env.js'
import connectMongoDB from './config/Mongodb.js';
import 
{
httpServer,
httpBlogServer
} from "./config/http.js";

const bootstrap = async ()=>{

await connectMongoDB(process.env.MONGODB_URL);

const custom_port = Number(process.env.PORT);

httpServer.listen(custom_port,()=>{
console.log(`User Server is listening on port: ${custom_port}`);
});

httpBlogServer.listen(custom_port+1,()=>{
console.log(`Blog Server is listening on port: ${custom_port+1}`);
});

};
bootstrap();



