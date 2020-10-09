import React, { Component } from 'react';
import * as styles from "./estacionCard.module.css"

class EstacionCard extends Component {
  render() {
    const {nombre,distancia,url} = this.props.estacion
    return (
      <div className = {styles.estacion}>
        <div className={styles.header} style = {{backgroundImage: `url(${url})`}}></div>
        <div className={styles.titulo}> {nombre} </div>
        <div className={styles.subtitulo}>Km - {distancia}  </div>

        <div className={styles.elementListContainer}>
          <span className={styles.nombreSensor}>PH</span>
          <span className={styles.valorSensor}>12.5</span>
        </div>
        <div className={styles.elementListContainer}>
          <span className={styles.nombreSensor}>Temperatura</span>
          <span className={styles.valorSensor}>10</span>
        </div>
        <div className = {styles.btnContainer}>
          <button className={styles.option}>Ver Detalle</button>
          <button className={styles.option}>Anadir Sensor</button>
        </div>
      </div>
    );
  } 
}

export default EstacionCard;
