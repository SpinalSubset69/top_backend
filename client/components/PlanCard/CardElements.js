import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const PlanItem = styled.div`
  width: 75%;
  height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 150px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.02);
  }

  @media screen and (max-width: 1800px){
   width: 50%;
  }

  @media screen and (max-width: 750px){
   width: 75%;
  }

  @media screen and (max-width: 411px) {
    width: 90%;
  }


`;

export const PlanHeaderContiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;  
  align-items: flex-end;
`

export const PlanH1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;  
  width: 100%;
  height: 300px;
  background: ${({dark}) => (dark ? '#000000' : 'var(--yellow)')};
`;
export const PlanH3Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100px;
  transform: translateY(50px);
  background: ${({dark}) => (dark ? 'var(--yellow)' : '#000')};
  color: ${({dark}) => (dark ? '#000' : '#fff')} ;

  @media screen and (max-width: 1120px) {
    width: 350px;
    height: 100px;  
  }


  @media screen and (max-width: 750px) {
    width: 300px;
  height: 100px;  
  }

  @media screen and (max-width: 411px) {
    width: 200px;
  height: 100px;  
  }
`;

export const PlanH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${({dark}) => (dark ? 'var(--yellow)' : 'var(--black)')};
  @media screen and (max-width: 411px) {
    font-size: 30px;
  }
`;

export const PlanH1Subtitle = styled.h1`
  font-size: 64px;
  font-weight: 700;  
  color: ${({dark}) => (dark ? '#ffffff' : 'var(--dark)')};

  @media screen and (max-width: 1120px) {
    font-size: 48px; 
  }
  @media screen and (max-width: 750px) {
    font-size: 48px;
  }

  @media screen and (max-width: 411px) {
    font-size: 40px;
  }
`

export const PlanH3 = styled.h3`
  margin-top: 25px;
  font-size: 24px;  
  font-weight: 700;
  width: 75%;

  @media screen and (max-width: 1120px) {
    font-size: 20px;
  }
  @media screen and (max-width: 750px) {
    text-align: center;
    width: 100%;
    font-size: 20px;
  }

  @media screen and (max-width: 411px) {
    font-size: 18px;
  }
`;

export const PlanOptionsContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
 
`;

export const PlanIco = styled.img`
  display: ${({ image }) => (image ? "" : "none")};
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const PlanDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;

  @media screen and (max-width: 750px) {
    font-size: 24px;
  }

  @media screen and (max-width: 411px) {      
    font-size: 18px;
  }
`;

export const PlanDescription = styled.div`
  padding: 5px;
  display: flex;  
  align-items: center;  
  margin-bottom: 50px;  
`;

export const CheckIco = styled(AiOutlineCheckCircle)`

  color: #fce355;
  font-size: 50px;
  margin-right: 10px;

  @media screen and (max-width: 750px){
    margin-right: 5px;
    font-size: 35px;
  }
`;

