const User = require("../../models/user")
const jwt = require("jsonwebtoken")
const Estacion = require("../../models/estacion")

const getAllEstaciones =async (req,res)=>{
  try {
    let estaciones = await Estacion.find()
    res.status(200).send({estaciones})
  } catch (error) {
    res.status(500).send({error:error.message}) 
  }
}

const getEstacionById =async (req,res)=>{
  try {
    let {idEstacion } = req.params
    let estacion = Estacion.findById(idEstacion)
    res.status(200).send({estacion})
  } catch (error) {
    res.status(500).send({error:error.message})
  }
}

module.exports = {
  getAllEstaciones,
  getEstacionById,
}