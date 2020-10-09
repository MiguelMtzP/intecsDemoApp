'use strict'
const Express = require("express")
const controllers = require("./controller")
const api = Express.Router()



api.get("/",controllers.getAllEstaciones)
api.get("/:idEstacion",controllers.getEstacionById)

module.exports = api