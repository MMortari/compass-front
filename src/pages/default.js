import styled from 'styled-components';

export const mainColor = 'rgb(237,20,91)';
export const mainColorDarker = 'rgb(200, 14, 75)';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
    width: 100%;

    .col {
        padding-right: 2px !important;
        padding-left: 2px !important;
    }
`
export const Card = styled.div`
    width: 700px;
    min-height: 500px;
    max-height: 75vh;
    background-color: white;
    border-radius: 8px;
    padding: 22px 50px 75px;
    position: absolute;

    small {
        color: #6f6d6d;
    }
`