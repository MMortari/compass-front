import styled from 'styled-components';

export const Container = styled.div`
    background-color: #2f2f2f;
    // background-color: rgb(237, 20, 91);
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Cart = styled.div`
    min-width: 500px;
    min-height: 250px;  
    background-color: white;
    border-radius: 4px;
    padding: 30px;

    h1 {
        text-align: center;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;

    input {
        background-color: #f6f6f6;
        border: none;
        padding: 20px;
        border-radius: 4px;
        margin-bottom: 10px;
        // text-align: center

        &:first-child {
            margin-top: 60px;
        }
    }

    button {
        border: none;
        padding: 15px;
        border-radius: 4px;
        background-color: rgb(237, 20, 91);
        // background-color: #2f2f2f;
        color: white;
        font-size: 18px;
        margin-top: 25px;
        // width: 84px;
    }
`;