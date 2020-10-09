import React, { Component } from 'react';
import EstacionCard from '../estacionCard';
import * as styles from "./listaEstaciones.module.css"

class ListaEstaciones extends Component {
  constructor (props){
    super(props)

    this.state = {
      estaciones : [
        {
          nombre:"Estacion 1",
          distancia:2.4,
          url:"https://tierrabaldia.com.mx/uploads/news_pictures/866.jpg",
        },
        {
          nombre:"Estacion 1",
          distancia:2.4,
          url:"https://tierrabaldia.com.mx/uploads/news_pictures/866.jpg",
        }
      ]
    }
  }
  
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className = {styles.mainContainer}>
        {this.state.estaciones.map(e=>(
          <EstacionCard estacion = {e}/>
        ))}
      </div>
    );
  }
}

export default ListaEstaciones;