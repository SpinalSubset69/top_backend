import React from "react";
import { hot } from "react-hot-loader";
import { LoginContainer, AsideLeft, AsideRight } from "./LoginElements";


const Login = () => {
  return (
    <>
     <LoginContainer>
       <AsideLeft></AsideLeft>
       <AsideRight></AsideRight>       
     </LoginContainer>
    </>
  );
};

export default hot(module)(Login);
