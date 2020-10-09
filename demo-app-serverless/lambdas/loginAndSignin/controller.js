const User = require("../../models/user")
const jwt = require("jsonwebtoken")

const login =async (req,res)=>{
  try {
    const {email,password} = req.body
    let user =await User.findOne({email,password})
    if (user) {
      res.status(200).send({user})
    } else {
      res.status(403).send({access:"invalid login",email,password}) 
    }
  } catch (error) {
    res.status(500).send({error:error.message}) 
  }
}

const signin =async (req,res)=>{
  try {
    const {
      email,
      password,
    } = req.body
    let newUser = new User()
    newUser.email = email
    newUser.password = password
    let saved = await newUser.save()

    res.status(200).send({user:saved})
  } catch (error) {
    res.status(500).send({error:error.message})
  }
}

module.exports = {
  login,
  signin
}