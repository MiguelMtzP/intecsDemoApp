'use strict';

const serverless = require("serverless-http");
const express = require("express");
const app = express();
const bodyParser = require ("body-parser");
const Router = require ("./router");
const dbConn = require("../../db");
const { json } = require("body-parser");
const Estacion = require("../../models/estacion");
const Medicion = require("../../models/medicion");


// app.use(bodyParser.json({string:false}))
// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin','*');
//   res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
//   res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
//   res.header('Allow','GET, POST, PUT, DELETE')
//   next();
// });
// app.use((req,res,next)=>{
//   console.log("middleware de conexion a la BD ----->",req.headers);
//   dbConn()
//     .then(()=>{
//       console.log("conexion exitosa!!!");
//       next()
//     })
//     .catch(e=>{
//       console.log("fallo conexion-->", e.message);
//       res.status(400).send({err:e.message})
//     })

// })

// app.use ("/dataIn", Router)
// module.exports.api2 = serverless(app);
module.exports.api = async ev =>{
  try {

    let estaciones = await Estacion.find()
    console.log("las estaciones ....",estaciones);
    for (const est of estaciones) {
      let newMedicion = new Medicion()
      newMedicion.sensor = est.nombre
      newMedicion.idEstacion = est._id
      newMedicion.valor = Math.round(Math.random()*1000)/10
      await newMedicion.save()
    }
    const today = new Date();
    console.log("----------------------------------------");
    console.log("Termino proceso ",today);
    console.log("----------------------------------------");
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v1.0! Your function executed successfully!',
        },
        null,
        2
      ),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'error!!!',
        },
        null,
        2
      ),
    };
  }
};