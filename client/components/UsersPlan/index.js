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
  PlansWrapper,
  PlanDescription,
  PlanEndSpan,
  MainSpanImg
} from "./PlanElements";
import logoTop from '../../static/LOGOTOP.png'
import PlanCard from "../PlanCard";
import { Plan1, Plan2, Plan3, Plan4, Plan5 } from "./data";

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
          <MainSpanH1>Training Studio</MainSpanH1>      
          <MainSpanH1>Planes</MainSpanH1>          
        </PlanMainSpan>
        <PlanScheduleContainer>
          <ScheduleH1>Horario TOP Training Studio</ScheduleH1>
          <Schedule src={schedule}/>
        </PlanScheduleContainer>
        <PlansWrapper>
          <PlanCard {...Plan1}/>          
          <PlanCard {...Plan2}/>     
          <PlanCard {...Plan3}/>  
          <PlanCard {...Plan4}/>  
          <PlanCard {...Plan5}/>  
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
