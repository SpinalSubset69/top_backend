import React from "react";
import { hot } from "react-hot-loader";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarWrapper,
  SideBarMenu,
  SideBtnWrap,
  SideBarRoute
} from "./SideBarElements";
const SideBar = ({ isOpen, toggle }) => {
  
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>             
            <SideBarLink to="/">Inicio</SideBarLink>
          </SideBarMenu>
          <SideBarMenu>
            <SideBarLink to="/">Planes</SideBarLink>
          </SideBarMenu>
          <SideBarMenu>
            <SideBarLink to="/">Ubicación</SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
              <SideBarRoute to="/prueba">Prueba</SideBarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default hot(module)(SideBar);
