import React from "react";
import { hot } from "react-hot-loader";
import { Link, useRouteMatch } from "react-router-dom";
import ImagesSlider from "./ImagesSlider";
import checkIco from '../../static/check.png'
import tgIco from '../../static/tg-ico.png';
import ptIco from '../../static/pt-ico.png';
import ffIco from '../../static/ff-ico.png';

const UsersMain = () => {
  let { url } = useRouteMatch();
  return (
    <div className="user-main-container">
      <div className="main-span">
        <h1>TOP Training Studio</h1>
        <Link className="btn-gym" to={`${url}/planes`}>Mira Nuestros programas</Link>
      </div>
      <div className="main-text-container">
        <p>¿Cúal es tu objetivo?</p>
        <div className="main-text-options-container">
            <ul>
                <li><img src={checkIco} alt="ico"/>Perder peso</li>
                <li><img src={checkIco} alt="ico"/>Mejorar tu rendimiento en algún  deporte</li>               
               
            </ul>
            <ul>
                <li><img src={checkIco} alt="ico"/>Recuperar la forma</li>
                <li><img src={checkIco} alt="ico"/>Tonificar</li>
            </ul>
            <ul>
                <li><img src={checkIco} alt="ico"/>Recuperarte un lesión</li>
            </ul>
        </div>
      </div>
      <div className="images-banner-container">
            <ImagesSlider/>
      </div>      
      
      <div className="plans-container">      
      <h1>Elige uno de nuestros planes</h1>    
        <div className="plans-options-container">     
            <div className="plans-option"><img src={ptIco}/>Atención 100% personalizada. </div>
            <div className="plans-option"><img src={ffIco}/>Crea tu propio grupo. <br/> Comparte la experiencia de entrenar con tu familia <br/> o amigos que tengan un mismo ojetivo. </div>
            <div className="plans-option"><img src={tgIco}/>Únete a nuestras clases grupales<br/> en un amplio horario y un reducido numero de personas.</div>           
        </div>         
      </div>
      <div className="plans-button"><Link className="btn-gym">Conoce más</Link></div>
    <div className="end-banner">
      <p>Visita Nuestra Sucursal</p>
      <Link className="btn-gym">Ubicación</Link>
    </div>
    </div>
  );
};

export default hot(module)(UsersMain);
