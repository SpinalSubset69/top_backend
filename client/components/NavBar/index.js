import React from "react";
import { hot } from "react-hot-loader";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  LogoImg
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { useRouteMatch } from "react-router";
import logoTop from '../../static/LOGOTOP.png'

export const NavBar = ( { toggle } ) => {
  const { url } = useRouteMatch();  
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/"><LogoImg src={logoTop} /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to={`${url}`}>Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={`/planes`}>Planes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/location">Ubicación</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to={`/login`}>Acceso</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default hot(module)(NavBar);
