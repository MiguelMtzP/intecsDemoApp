'use strict'
const Express = require("express")
const controllers = require("./controller")
const api = Express.Router()



api.post("/",controllers.login)
api.post("/signin",controllers.signin)

module.exports = api