import React from "react";
import gymLeft from "../../static/gym-left.jpg";
import logo from "../../static/logo.jpg";
import userIco from "../../static/user_ico.jpg";
import passwordIco from "../../static/password_ico.jpg";
import { hot } from "react-hot-loader";

const Login = () => {
  return (
    <div>
      <div className="form-container">
        <form className="login-form">
          <img className="login-logo" src={logo} alt="logo" />
          <div className="login-form-group">
            <div className="form-inputs">
              <img className="form-ico" src={userIco} alt="user" />
              <input type="text" placeholder="Email..." />
            </div>
            <div className="form-inputs">
              <img className="form-ico" src={passwordIco} alt="user" />
              <input type="text" placeholder="Contraseña..." />
            </div>
          </div>
          <button type="submit">Acceder</button>
        </form>
      </div>
      <div className="login-container">
        <div className="left-banner"></div>
        <img className="img-logo" src={gymLeft} />
      </div>
    </div>
  );
};

export default hot(module)(Login);
