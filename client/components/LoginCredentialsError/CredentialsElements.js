import styled from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';

export const CredentialsContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    top: 75%;
    transform: translateX(500px);
    animation: fromUp 1s ease both;
`

export const CredentialsWrapper = styled.div`
    width: 300px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid red;
    margin-right: 100px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
    padding: 20px;
`

export const CredentialsHeader= styled.h1`
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 700;
`

export const Icon = styled(FiAlertCircle)`
    color: red;
    font-size: 24px;
    margin-right: 10px;
`