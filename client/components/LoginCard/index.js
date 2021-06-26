import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";

import {
  CardContainer,
  CardWrapper,
  CardLogo,
  CardForm,
  CardFormButton,
  CardFormLabel,
  CardHeader,
  CardFormInput,
} from "../../components/LoginCard/CardComponents";
import logo from "../../static/LOGOTOP.png";


const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(false);

  const verifyToken = async () => {
    if(localStorage.getItem('token')){        
      const response = await fetch(`/api/staff`, {
        method: 'get',          
        headers: {
          'x-access-token' : localStorage.getItem('token')
        }
      });
      const data = await response.json();
      if(data.message === 'Token expired'){
        //TODO: Spin Loader 
      }
  }
}

  useEffect(  () => {
    verifyToken();        
  }, [])

  const onFormSubmmit = async (e) => {
    e.preventDefault();    
    const response = await fetch(`/api/staff`, {
      method: 'post',          
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json().then((data) => {
      if(data.auth === true){
        localStorage.setItem('token', data.token);        
      }
    });    
  }

  return (
    <>
      <CardContainer>
        <CardWrapper>
          <CardLogo src={logo} />
          <CardHeader>Bienvenido</CardHeader>
          <CardForm onSubmit={onFormSubmmit}>
            <CardFormInput onChange={ (e) => setEmail(e.target.value) } value={email} type="email" placeholder="Email Address" />
            <CardFormInput onChange={ (e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
            <CardFormButton type="submit">Entrar</CardFormButton>
          </CardForm>                   
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default hot(module)(LoginCard);
