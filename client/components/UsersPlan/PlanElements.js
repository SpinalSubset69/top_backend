import styled from "styled-components";
import { Link } from "react-router-dom";
import mainSpan from "../../static/main-span.jpg";
import endSpan from "../../static/gym-img-1.png";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const PlanContainer = styled.section`
  animation: fade 1s ease-in-out both;
`;

export const PlanMainSpan = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${mainSpan});
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MainSpanImg = styled.img`
    width: 200px;
    height: 100px;
`

export const MainSpanH1 = styled.h1`
  font-size: 64px;
`;

export const MainSpanLink = styled(Link)`
  text-decoration: none;
  color: #2c2c2c;
  background: #fce355;
  padding: 15px 24px;
  border-radius: 50px;
  font-size: 20px;

  &:hover {
    background-color: var(--black);
    text-decoration: none;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;

export const PlanScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const ScheduleH1 = styled.h1`
  font-size: 48px;
  margin-bottom: 50px;
`;

export const Schedule = styled.img`
  width: 75%;

  @media screen and (max-width: 978px) {
    width: 100%;
    height: 800px;
  }

  @media screen and (max-width: 740px) {
    width: 100%;
    height: 500px;
  }
`;

export const PlansWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PlanItem = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    filter: none;
    box-shadow: none;
    width: 100%;
    text-align: center;
    border-bottom: 3px solid #fce355;
    margin-bottom: 50px;
  }
`;
export const PlanH1 = styled.h1`
  font-size: 64px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const PlanH3 = styled.h3`
  margin-top: 25px;
  font-size: 28px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const PlanOptionsContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PlanIco = styled.img`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const PlanDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const PlanDescription = styled.div`
  display: flex;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CheckIco = styled(AiOutlineCheckCircle)`
  color: #fce355;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const PlanEndSpan = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${endSpan});
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
