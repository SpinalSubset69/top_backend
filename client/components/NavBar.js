import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import logo from "../static/TOP.png";
import UsersPlan from "./Users/UsersPlan";

const NavBar = () => {
  const { url } = useRouteMatch()
  return (    
    <div className="nav-bar-container">    
      <div className="nav-bar-options">
      <Link to="/"><img src={logo}/> </Link>
        <ul>
          <li><Link to={`${url}`} >Inicio</Link></li>
          <li><Link to={`${url}/planes`}>Planes</Link></li>
          <li><Link>Ubicación</Link></li>
        </ul>      
      </div>      
     
      <Link className="btn-nav">Prueba</Link>
    </div>
  );
};

export default NavBar;
