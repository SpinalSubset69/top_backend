import React from 'react'
import { hot } from 'react-hot-loader';
import { LoginContainer, AsideLeft, AsideRight } from '../login/LoginComponents';
import  LoginCard  from '../../components/LoginCard';

const Login = () => {
    return (
        <>
            <LoginContainer>   
                <AsideLeft/>           
                <LoginCard/>
                <AsideRight/>
            </LoginContainer>      
        </>
    )
}


export default hot(module)(Login);