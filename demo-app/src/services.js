import axios from "axios";

const url = "http://localhost:3000/"
const login = (usr,pass) => axios.post(`${url}dev/access`,{email:usr,password:pass})



export {login}