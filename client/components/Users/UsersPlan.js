import React from "react";
import { hot } from "react-hot-loader";
import { useEffect } from "react";
import tgIco from '../../static/tg-ico.png';
import ptIco from '../../static/pt-ico.png';
import ffIco from '../../static/ff-ico.png';
import checkIco from '../../static/check.png'
import topSchedule from '../../static/TOP-Schedule.jpg';

const UsersPlan = () => {

  useEffect(() => {
    window.scrollTo(0,100,{
      behavior: 'smooth',   
    })
  });

  return (
    <div className="users-plan-container">      
      <div className="main-span">
        <h1>Mira Nuestros Planes</h1>
        <h2>Contamos con distintos programas, con la misma calidad de entrenamiento.</h2>
      </div>
      <div className="schedule-container">
        <h1>Horario TOP:</h1>
        <img src={topSchedule} alt="Horario"/>
      </div>
      <div className="plan-container">
        <div className="plan">
          <div className="plan-header">
          <h1>Top Group(TG)</h1>
            <h3>Únete a nuestras clases grupales en un amplio horario.</h3>
          </div>
            <div className="plan-content">
                <img src={tgIco} />
                <ul>
                  <li><img src={checkIco} />Rutina semipersonalizada.</li>
                  <li><img src={checkIco} />Reducido número de personas.</li>
                  <li><img src={checkIco} />Costo mensual: $2,400</li>
                </ul>
            </div>
        </div>
        <div className="plan">
        <div className="plan-header">
          <h1>Friends and Family (FF)</h1>
            <h3>Comparte la experiencia de entrenar con tu familia o amigos.</h3>
          </div>
            <div className="plan-content">               
            <img src={ffIco} />
                <ul>
                  <li><img src={checkIco} />Crea tu propio grupo.</li>
                  <li><img src={checkIco} />Disfruta de ejercitarte con tus amigos.</li>
                  <li><img src={checkIco} />$800 por sesión, máximo 6 personas.</li>
                  <li><small>*Consulte horarios disponibles</small></li>
                </ul>               
            </div>
        </div>
        <div className="plan">
        <div className="plan-header">
          <h1>Personal Training (PT)</h1>
            <h3>Atención 100% personalizada</h3>
          </div>
            <div className="plan-content">               
            <img src={ptIco} />
                <ul>
                  <li><img src={checkIco} />Elaboración de rutina exclusiva.</li>
                  <li><img src={checkIco} />Entrena de acuerdo a tus necesidades.</li>
                  <li><img src={checkIco} />$500 por sesión.</li>
                </ul>               
            </div>
        </div>
        <div className="plan">
        <div className="plan-header">
          <h1>Entrenamiento en casa</h1>
            <h3>Diseñado para usuarios que deseen tener un entrenador en casa</h3>
          </div>
            <div className="plan-content">                           
                <ul>
                  <li><img src={checkIco} />Rutinas personalizadas.</li>
                  <li><img src={checkIco} />Duración máxima de 60 minutos.</li>
                  <li><small>*El equipo deberá ser proporcionado por el usuario.</small></li>
                </ul>               
            </div>
        </div>
        <div className="plan">
        <div className="plan-header">
          <h1>Entrenamiento Mixto</h1>
            <h3>Este plan consta de una combinación de presencial y asistencia en casa.</h3>
          </div>
            <div className="plan-content">                           
                <ul>
                  <li><img src={checkIco} />Rutinas específicas</li>
                  <li><img src={checkIco} />Contarás con un entrenador personal en todo momento.</li>
                  <li><img src={checkIco} />Plan totalmente ajustable a cada caso.</li>
                  <li><small>*El equipo deberá ser proporcionado por el usuario.</small></li>
                </ul>               
            </div>
        </div>
      </div>
    </div>
  );
};

export default hot(module)(UsersPlan);
