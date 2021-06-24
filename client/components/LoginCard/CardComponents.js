import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 800px;
    height: 100%;
    background: var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;    
`

export const CardWrapper = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: white;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
    padding: 20px;
`

export const CardLogo = styled.img`
    width: 150px;
    height: 80px;    
    margin-bottom: 50px;
`

export const CardHeader = styled.h1`
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 50px;
`

export const CardForm= styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CardFormLabel = styled.label`
    font-size: 32px;    
`

export const CardFormInput = styled.input`
    width: 90%;
    height: 50px;
    text-align: center;
    font-size: 24px;
    border: 0.5px solid rgba(0, 0 ,0, 0.25);
    border-radius: 25px;
    margin-bottom: 25px;

    &:focus{
        outline: none;
        border: 3.5px solid var(--orange);
        transition: all 0.3s ease-in-out;
    }
`

export const CardFormButton = styled.button`
    padding: 15px 100px;
    border-radius: 25px;
    border: none;
    background: var(--yellow);
    font-size: 24px;
    color: var(--darkBlue);
    font-weight: 700;

    &:hover{
        background: var(--darkBlue);
        color: white;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    &:focus{
        outline: none;
    }
`