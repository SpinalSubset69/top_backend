import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mainSpan from '../../static/main-span.jpg';
import endSpan from '../../static/gym-img-1.png';

export const HomeUsersContainer = styled.section`    
    animation: fade 1s ease-in-out both;    

`

export const HomeMainSpan = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${mainSpan}) ;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    text-align: center;
`

export const MainSpanH1 = styled.h1`
    font-size: 64px;    
    animation: fade 1s ease-in-out both;
`

export const MainSpanLink = styled(Link)`
    text-decoration: none;
    color: #2c2c2c;
    background: #FCE355;
    padding: 15px 24px;
    border-radius: 50px;
    font-size: 20px;

    &:hover{
        background-color: var(--black);
    text-decoration: none;
    color: white;
    transition: all 0.5s ease-in-out;
    }
`

export const HomeGoalsContainer = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

export const GoalsP = styled.p`
    font-size: 38px;
    color: #2c2c2c;

    @media screen and (max-width: 600px){
        font-size: 30px;
    }
`
export const GoalsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 400px);    
    align-items: center;

    @media screen and (max-width: 1230px){
        grid-template-columns: repeat(3, 350px); 
    }

    @media screen and (max-width: 1050px){
        grid-template-columns: repeat(3, 300px); 
    }

    @media screen and (max-width: 920px){
        grid-template-columns: repeat(2, 400px);         
    }

    @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 200px);         
    }
`

export const GoalsIco = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

export const GoalsItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #2c2c2c;
    font-size: 25px;
    margin-bottom: 25px;
`

export const PlansContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
`

export const PlansH1 = styled.h1`
    font-size: 38px;
    color: #2c2c2c;

    @media screen and (max-width: 600px){
        font-size: 30px;
    }   
`

export const PlansWrapper = styled.div`
    width: 100%;
    display: flex ;
    justify-content: space-evenly;
    margin-bottom: 50px;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }

`

export const PlansIco = styled.img`
    width: 75px;
    height: 75px;    
    margin-top: 25px;
    margin-bottom: 25px;
`

export const PlansItem = styled.div`
    text-align: center;
    color: #2c2c2c;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`

export const HomeEndSpan = styled.div`
width: 100%;
height: 600px;
background-image: url(${endSpan}) ;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;    
text-align: center;
`