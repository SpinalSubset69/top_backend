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
  SideBarRoute,
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
            <SideBarLink onClick={toggle} to="/">
              Inicio
            </SideBarLink>
          </SideBarMenu>
          <SideBarMenu>
            <SideBarLink onClick={toggle} to="/planes">
              Planes
            </SideBarLink>
          </SideBarMenu>
          <SideBarMenu>
            <SideBarLink onClick={toggle} to="/">
              Ubicación
            </SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
            <SideBarRoute onClick={toggle} to="/prueba">
              Prueba
            </SideBarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default hot(module)(SideBar);
