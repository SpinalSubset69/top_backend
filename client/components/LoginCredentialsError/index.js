import React from 'react';
import { hot } from 'react-hot-loader';
import { CredentialsContainer, CredentialsHeader, CredentialsWrapper, Icon } from './CredentialsElements';
const LoginCredentials = ({ message }) => {
    return (
        <>
            <CredentialsContainer>
              <CredentialsWrapper>
                <Icon/><CredentialsHeader>{ message }</CredentialsHeader>
              </CredentialsWrapper>
            </CredentialsContainer>
        </>
    );
}

export default hot(module)(LoginCredentials);