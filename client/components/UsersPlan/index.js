import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import schedule from "../../static/TOP-Schedule.jpg";
import {
  PlanContainer,
  PlanMainSpan,
  MainSpanH1,
  MainSpanLink,
  PlanScheduleContainer,
  Schedule,
  ScheduleH1,
  PlanDescriptionContainer,
  PlanH1,
  PlanH3,
  PlanItem,
  PlanOptionsContainer,
  PlansWrapper,
  PlanIco,
  PlanDescription,
  CheckIco,
  PlanEndSpan,
  MainSpanImg
} from "./PlanElements";
import checkIco from "../../static/check.png";
import ptIco from "../../static/pt-ico.png";
import ffIco from "../../static/ff-ico.png";
import tgIco from "../../static/tg-ico.png";
import logoTop from '../../static/LOGOTOP.png'

const UsersPlan = () => {
  useEffect(() => {
    window.scrollTo(0, 100, {
      behavior: "smooth",
    });
  });

  return (
    <>
      <PlanContainer>
        <PlanMainSpan>
          <MainSpanImg src={logoTop}/>
          <MainSpanH1>Entrena con nosotros</MainSpanH1>
          <MainSpanLink to="/planes">Acceso</MainSpanLink>
        </PlanMainSpan>
        <PlanScheduleContainer>
          <ScheduleH1>Horario TOP Training Studio</ScheduleH1>
          <Schedule src={schedule}/>
        </PlanScheduleContainer>
        <PlansWrapper>
          <PlanItem> 
            <PlanH1>Top Group(TG)</PlanH1>
            <PlanH3>
              Únete a nuestras clases grupales en un amplio horario.
            </PlanH3>
            <PlanOptionsContainer>
              <PlanIco src={tgIco} />
              <PlanDescriptionContainer>
                <PlanDescription>
                  <CheckIco /> Rutina semipersonalizada.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco /> Reducido número de personas.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco  /> Costo mensual: $2,400
                </PlanDescription>
              </PlanDescriptionContainer>
            </PlanOptionsContainer>
          </PlanItem>
          <PlanItem>
            <PlanH1>Friends and Family(FF)</PlanH1>
            <PlanH3>
              Comparte la experiencia de entrenar con tu familia o amigos.
            </PlanH3>
            <PlanOptionsContainer>
              <PlanIco src={ffIco} />
              <PlanDescriptionContainer>
                <PlanDescription>
                  <CheckIco/> Crea tu propio grupo.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco /> Disfruta de ejercitarte con tus
                  amigos.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco /> $800 por sesión, máximo 6
                  personas.
                </PlanDescription>
              </PlanDescriptionContainer>
            </PlanOptionsContainer>
          </PlanItem>
          <PlanItem>
            <PlanH1>Personal Training (PT)</PlanH1>
            <PlanH3>Atención 100% personalizada</PlanH3>
            <PlanOptionsContainer>
              <PlanIco  src={ptIco}/>
              <PlanDescriptionContainer>
                <PlanDescription>
                  <CheckIco  /> Elaboración de rutina exclusiva.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco  /> Entrena de acuerdo a tus
                  necesidades.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco  /> $500 por sesión.
                </PlanDescription>
              </PlanDescriptionContainer>
            </PlanOptionsContainer>
          </PlanItem>
          <PlanItem>
            <PlanH1>Entrenamiento en casa</PlanH1>
            <PlanH3>
              Diseñado para usuarios que deseen tener un entrenador en casa
            </PlanH3>
            <PlanOptionsContainer>
              <PlanDescriptionContainer>
                <PlanDescription>
                  <CheckIco /> Rutinas personalizadas.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco  /> Duración máxima de 60 minutos.
                </PlanDescription>
                <PlanDescription>
                  *El equipo deberá ser proporcionado por el usuario.
                </PlanDescription>
              </PlanDescriptionContainer>
            </PlanOptionsContainer>
          </PlanItem>
          <PlanItem>
            <PlanH1>Entrenamiento Mixto</PlanH1>
            <PlanH3>
              Este plan consta de una combinación de presencial y asistencia en
              casa.
            </PlanH3>
            <PlanOptionsContainer>
              <PlanDescriptionContainer>
                <PlanDescription>
                  <CheckIco src={checkIco} /> Rutinas específicas.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco src={checkIco} /> Contarás con un entrenador
                  personal en todo momento.
                </PlanDescription>
                <PlanDescription>
                  <CheckIco src={checkIco} /> Plan totalmente ajustable a cada
                  caso.
                </PlanDescription>
                <PlanDescription>
                  *El equipo deberá ser proporcionado por el usuario.
                </PlanDescription>
              </PlanDescriptionContainer>
            </PlanOptionsContainer>
          </PlanItem>
        </PlansWrapper>
        <PlanEndSpan>
          <MainSpanH1>Visita Nuestra Sucursal</MainSpanH1>
          <MainSpanLink to="/ubicacion">Ubicación</MainSpanLink>
        </PlanEndSpan>
      </PlanContainer>
    </>
  );
};

export default hot(module)(UsersPlan);
