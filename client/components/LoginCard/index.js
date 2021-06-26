import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";

import {
  CardContainer,
  CardWrapper,
  CardLogo,
  CardForm,
  CardFormButton,  
  CardHeader,
  CardFormInput,
  SpinLoader,
  SpinLoaderContainer,
  SpinLoaderHeader
} from "../../components/LoginCard/CardComponents";
import logo from "../../static/LOGOTOP.png";
import LoginCredentials from '../LoginCredentialsError';

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(false);
  const [warning, setWarning] = useState(false);
  const [message, setMessage] = useState('');

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
    setSession(!session);
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
        window.location= '/';
      }

      if(data.message === 'Wrong Email'){
        setWarning(true);
        setMessage('Wrong Email')
        setSession(false);
        setTimeout(()=> {
          setWarning(false);
        }, 3000)
      }

      if(data.message === 'Wrong Password'){
        setWarning(true);
        setMessage('Wrong Password')
        setSession(false);
        setTimeout(()=> {
          setWarning(false);
        }, 3000)
      }
    });    
  }

  return (
    <>       
      <CardContainer>
      {session ? 
        <SpinLoaderContainer>            
          <SpinLoaderHeader>Iniciando Sesión...</SpinLoaderHeader>
          <SpinLoader></SpinLoader>
        </SpinLoaderContainer>
      :
        <CardWrapper>    
          <CardLogo src={logo} />
          <CardHeader>Bienvenido</CardHeader>
          <CardForm onSubmit={onFormSubmmit}>
            <CardFormInput onChange={ (e) => setEmail(e.target.value) } value={email} type="email" placeholder="Email Address" />
            <CardFormInput onChange={ (e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
            <CardFormButton type="submit">Entrar</CardFormButton>
          </CardForm>                        
        </CardWrapper>
      }
      {warning ? <LoginCredentials message={message}/> :  ''}
      </CardContainer>

    </>
  );
};

export default hot(module)(LoginCard);
