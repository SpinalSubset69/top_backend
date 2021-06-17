import React from "react";
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
  HomeEndSpan
} from "./UsersElements";
import checkIco from '../../static/check.png';
import ImagesSlider from "../Users/ImagesSlider";
import ptIco from '../../static/pt-ico.png';
import ffIco from '../../static/ff-ico.png';
import tgIco from '../../static/tg-ico.png';

export const HomeUsers = () => {
  return (
    <>
      <HomeUsersContainer>
        <HomeMainSpan>
          <MainSpanH1>Nuestros Planes</MainSpanH1>
          <MainSpanLink to="/planes">Mira Nuestros Planes</MainSpanLink>
        </HomeMainSpan>        
        <HomeGoalsContainer>
            <GoalsP>¿Cuál es tu objetivo?</GoalsP>     
            <GoalsContainer>
                <GoalsItem><GoalsIco src={checkIco} /> Perder peso</GoalsItem>
                <GoalsItem><GoalsIco src={checkIco} /> Mejorar tu rendimiento</GoalsItem>
                <GoalsItem><GoalsIco src={checkIco} /> Recuperar la forma</GoalsItem>
                <GoalsItem><GoalsIco src={checkIco} /> Tonificar</GoalsItem>
                <GoalsItem><GoalsIco src={checkIco} /> Recuperarte un lesión</GoalsItem>
            </GoalsContainer>       
        </HomeGoalsContainer>
        <ImagesSlider/>
        <PlansContainer>
            <PlansH1>Elige cualquiera de nuestros planes</PlansH1>
            <PlansWrapper>
                <PlansItem><PlansIco src={ptIco} />Atención 100% personalizada.</PlansItem>
                <PlansItem><PlansIco src={ffIco} />Comparte la experiencia de entrenar con tu familia <br/> o amigos que tengan un mismo ojetivo. </PlansItem>
                <PlansItem><PlansIco src={tgIco} />Atención 100% personalizada.</PlansItem>
            </PlansWrapper>
            <MainSpanLink to="/planes">Mira Nuestros Planes</MainSpanLink>
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
