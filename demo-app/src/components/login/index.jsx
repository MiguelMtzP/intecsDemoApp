import React, { Component } from 'react';
import * as styles from "./login.module.css"
import { login } from "../../services";
import { Redirect } from 'react-router-dom';
class Login extends Component {


  constructor (props) {
    super(props)
    this.state = {
      usuario:"",
      password:"",
      invalid:false
    }
  }
  login = async ()=>{
    try {
      let {data} = await login(this.state.usuario,this.state.password)
      console.log("login", data);

      localStorage.setItem("logued",true)
      this.setState({redirectTo: "/estaciones"})
    } catch (error) {
      console.log("se fallo", error);
      this.setState({invalid:true})
    }
    
  }

  changeInput = event =>{
    const {name,value} = event.target
    this.setState({[name]:value})
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to = {this.state.redirectTo} />
    }
    return (
      <div className = {styles.mainContainer} style = {{backgroundImage: `url(${require("../../assets/intecsBg.jpg")})`}}>
        <div className={styles.loginContainer} >
          <div className={styles.logo} style = {{backgroundImage: `url(${require("../../assets/intecsLogo.jpg")})`}}></div>
          <p className={styles.title}>
            Sistema de Monitoreo de Estaciones Remotas Rio Atoyac
          </p>
          <input name = {"usuario"} onChange = {this.changeInput} className = {styles.input } style = {{borderColor:this.state.invalid ? "red":"rgba(1,1,1,0)"}} placeholder = "Usuario" type="text" value = {this.state.usuario} />
          <input name = {"password"} onChange = {this.changeInput} className = {styles.input } style = {{borderColor:this.state.invalid ? "red":"rgba(1,1,1,0)"}} placeholder = "Contraseña" type="password" value = {this.state.password} />
          <button className={styles.btn} onClick = {this.login} >Ingresar</button>
          <p className={styles.versionDemo}>Version Demo</p>
        </div>
      </div>
    );
  }
}

export default Login; 