import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #2c2c2c;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};    
`

export const CloseIcon = styled(FaTimes)`
    color: #ffffff;
`

export const Icon = styled.div`
    position: absolute;
    margin-right: 20px;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
    
    @media screen and (max-width: 480px){
        margin-right: 5px;
}
`

export const SideBarWrapper = styled.div`
    color: #ffffff;    

`

export const SideBarMenu = styled.ul`    
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 20px);    
    text-align: center;    
    
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 20px) ;
    }    
    
`
export const SideBarLink = styled(LinkR)`    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;    
    color: #ffffff;
    cursor: pointer;    
    

    &:hover{
        text-decoration: none;
        color: var(--yellow);
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
        
`

export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #FCE355;
    white-space: nowrap;
    padding: 16px 64px;
    font-weight: 700;
    color: #2c2c2c;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 40px;
    &:hover{
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        background: #ffffff;
        color: #010606;
    }
`