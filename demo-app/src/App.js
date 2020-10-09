import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './components/login';
import EstacionCard from './components/estacionCard';
import ListaEstaciones from './components/listaEstaciones';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/acceso" component = { Login } />
        <Route exact path = "/estaciones" component = { ListaEstaciones } />
        <Route path = "*" component = { () => "404 NOT FOUND"} ></Route>
        {/* <Route exact path = "<pon_aqui_la_url>" component = { Nombre_De_Tu_Componente } /> */}
      </Switch>
    </div>
  );
}

export default App;
