import React, { useState } from "react";
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

  const onFormSubmmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
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
