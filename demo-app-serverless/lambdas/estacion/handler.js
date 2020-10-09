'use strict';

const serverless = require("serverless-http");
const express = require("express");
const app = express();
const bodyParser = require ("body-parser");
const Router = require ("./router");
const dbConn = require("../../db");


app.use(bodyParser.json({string:false}))
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
  res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.header('Allow','GET, POST, PUT, DELETE')
  next();
});
app.use((req,res,next)=>{
  console.log("middleware de conexion a la BD ----->",req.headers);
  dbConn()
    .then(()=>{
      console.log("conexion exitosa!!!");
      next()
    })
    .catch(e=>{
      console.log("fallo conexion-->", e.message);
      res.status(400).send({err:e.message})
    })

})

app.use ("/estacion", Router)
module.exports.api = serverless(app);