import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

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
    font-size: 40px;
  }
`;

export const PlanH3 = styled.h3`
  margin-top: 25px;
  font-size: 28px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
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
display: ${({image}) => (image ? '' : 'none')};
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
    font-size: 26px;
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


