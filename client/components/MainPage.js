import React from "react";
import { Link } from "react-router-dom";
import imgLeft from "../static/gym-left.jpg";
import imgRight from "../static/gym-right.jpg";
import logo from "../static/logo.jpg";
import Footer from "./Footer";
import { hot } from "react-hot-loader";
const MainPage = () => {
  return (
    <div>
      <div className="main-page-container">
        <Link to="/area-manager" className="main-image">
          <h1 className="title">Área Manager</h1>
          <img className="img-hover" src={imgLeft} alt="gym" />
        </Link>
        <div className="logo-separator">
          <img src={logo} alt="gym" />
        </div>
        <Link className="main-image" to="entrena-con-nosotors">
          <h1 className="title">
            Entrena Con <br /> Nosotros
          </h1>
          <img className="img-hover" src={imgRight} alt="gym" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default hot(module)(MainPage);
