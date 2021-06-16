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
  NavBtnLink
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { useRouteMatch } from "react-router";

export const NavBar = ( { toggle } ) => {
  const { url } = useRouteMatch();  
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">TOP</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to={`${url}`}>Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">Planes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">Ubicación</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Acceso</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default hot(module)(NavBar);
