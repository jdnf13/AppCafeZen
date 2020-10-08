import React from 'react';
import {BrowserRouter,  Switch,  Route,  Link, NavLink} from 'react-router-dom';
import Carro from './components/Carro.jsx';
import Tienda from './components/Tienda.jsx';
import FormCompra from  './components/FormCompra'
import './css/App.css';
import LogoBanner from './images/imagen21.jpg';
import Departamentos from './components/Departamentos';
import Ciudades from './components/Ciudades';
function App() {
  
  return (
    <BrowserRouter>
    <div className= "App">
      <div className="Banner">
        <div className="center-image">
          <img
            src={LogoBanner}
            alt={LogoBanner}
            className="imageBanner"
            
          ></img>
        </div>
        <nav className="navbar navbar-dark">
          <NavLink to="/Tienda" className="navbar-brand"><a className="ItemHover">Tienda</a></NavLink>
          <NavLink to="/Carro" className="navbar-brand" activeClassName="active"><a className="ItemHover">Carrito</a></NavLink>
          {
          //<NavLink to="/Compra" className="navbar-brand" activeClassName="active"><a className="ItemHover">Datos</a></NavLink>   
          }              
        </nav>  
      </div>
      <Switch>
        <Route path="/Tienda" exact component={Tienda}/>
        <Route path="/Carro" component={Carro}/>
        <Route path="/Compra" component={FormCompra}/>
        <Route path="/" exact component={Tienda}/>
      </Switch>
      <Departamentos></Departamentos>
      <Ciudades></Ciudades>
    </div>    
    </BrowserRouter>
  );
}

export default App;
