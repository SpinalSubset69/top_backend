import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo from "../static/TOP.png";
import UsersPlan from "./Users/UsersPlan";

const NavBar = () => {
  return (    
    <div className="nav-bar-container">    
      <div className="nav-bar-options">
      <Link to="/"><img src={logo}/> </Link>
        <ul>
          <li><Link>Inicio</Link></li>
          <li><Link>Planes</Link></li>
          <li><Link>Ubicación</Link></li>
        </ul>      
      </div>      
     
      <div><Link className="btn-nav">Prueba</Link></div>
    </div>
  );
};

export default NavBar;
