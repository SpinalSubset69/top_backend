import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import {
  HomeUsersContainer,
  HomeMainSpan,
  MainSpanH1,
  MainSpanLink,
  HomeGoalsContainer,
  GoalsP,
  GoalsContainer,
  GoalsItem,
  GoalsIco,
  PlansContainer,
  PlansH1,
  PlansItem,
  PlansWrapper,
  PlansIco,
  HomeEndSpan,
  MainSpanImg
} from "./UsersElements";
import checkIco from '../../static/check.png';
import ptIco from '../../static/pt-ico.png';
import ffIco from '../../static/ff-ico.png';
import tgIco from '../../static/tg-ico.png';
import ImagesSlider from "../Users/ImagesSlider";
import logoTop from '../../static/LOGOTOP.png'

export const HomeUsers = () => {
  useEffect(() => {
    window.scrollTo(0,100,{
      behavior: 'smooth',   
    })
  });

  return (
    <>
      <HomeUsersContainer>
        <HomeMainSpan>
          <MainSpanImg src={logoTop}/>
          <MainSpanH1>Training Studio</MainSpanH1>
          <MainSpanLink to="/planes">Ver Planes</MainSpanLink>
        </HomeMainSpan>      
        <ImagesSlider/>  
        <HomeGoalsContainer>
            <GoalsP>¿Cuál es tu objetivo?</GoalsP>     
            <GoalsContainer>
                <GoalsItem><GoalsIco/> Perder peso</GoalsItem>
                <GoalsItem><GoalsIco /> Mejorar tu rendimiento</GoalsItem>
                <GoalsItem><GoalsIco /> Recuperar la forma</GoalsItem>
                <GoalsItem><GoalsIco /> Tonificar</GoalsItem>
                <GoalsItem><GoalsIco /> Recuperarte de una lesión</GoalsItem>
            </GoalsContainer>       
        </HomeGoalsContainer>       
        <PlansContainer>
            <PlansH1>Elige cualquiera de nuestros planes</PlansH1>
            <PlansWrapper>
                <PlansItem><PlansIco src={ptIco} />Atención 100% personalizada.</PlansItem>
                <PlansItem><PlansIco src={ffIco} />Comparte la experiencia de entrenar con tu familia <br/> o amigos que tengan un mismo ojetivo. </PlansItem>
                <PlansItem><PlansIco src={tgIco} />Atención 100% personalizada.</PlansItem>
            </PlansWrapper>
            <MainSpanLink to="/planes">Ver Planes</MainSpanLink>
        </PlansContainer>     
        <HomeEndSpan>
          <MainSpanH1>Visita Nuestra Sucursal</MainSpanH1>
          <MainSpanLink to="/ubicacion">Ubicación</MainSpanLink>
        </HomeEndSpan>       
      </HomeUsersContainer>
    </>
  );
};

export default hot(module)(HomeUsers);
