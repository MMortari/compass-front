import styled from 'styled-components';

const mainColor = 'rgb(237,20,91)';
const mainColorDarker = 'rgb(200, 14, 75)';

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
export const CardPerguntas = styled.div`
    width: 700px;
    min-height: 500px;
    max-height: 75vh;
    background-color: white;
    border-radius: 8px;
    padding: 22px 50px 75px;
    position: absolute;

    .pags {
        display: flex;
        justify-content: center;

        button {
            border-radius: 50%;
            width: 8px;
            height: 8px;
            display: block;
            background: #ccc;
            margin: 0 5px;
            cursor: pointer;
            border: none;
            outline: none;

            &:hover {
                background: #2f2f2f
            }
            
            &.active {
                background: #828282;
                &:hover {
                    background: #2f2f2f
                }
            }
        }
    }

    .info {
        h1 {
            margin-top: 50px;
            font-size: 12px;
            color: #828282;
            font-weight: bold;
        }
        span {
            font-size: 20px;   
            margin-bottom: 20px;     
            text-align: justify
        }
    }

    .resp {
        margin: 30px 0 15px;
        color: #818181;

        label.p-checkbox-label {
            cursor: pointer;
        }
        textarea {
            width: 100%;
            min-height: 200px;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 16px;
            font-size: 12px;
        }
        .resp-options {
            margin: 4px 0;
            
            .p-checkbox .p-checkbox-box {
                &.p-highlight {
                    border-color: rgb(237,20,91);
                    background-color: rgb(237,20,91);
                    
                    &:not(.p-disabled):hover {
                        border-color: rgb(237,20,91);
                        background-color: rgb(237,20,91);
                    }
                }
                &:not(.p-disabled).p-focus {
                    box-shadow: 0 0 0 0.2em rgba(237,20,91, .5);
                    border-color: rgb(237,20,91);
                }
            }
        }
    }

    .btns {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        padding: 0 25px;

        button {
            background-color: rgb(237,20,91);
            padding: 12px 20px;
            border: none;
            color: white;
            font-size: 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            outline: none;

            svg {
                margin: 0 10px;
            }
        }
    }
`
export const CardRespostas = styled.div`
    width: 700px;
    min-height: 500px;
    max-height: 75vh;
    background-color: white;
    border-radius: 8px;
    padding: 22px 50px 75px;
    position: absolute;
    overflow: auto;
    ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background: #b2b2b2;
        border-radius: 4px;
        margin: 0 2px
    }

    h1 {
        text-align: center;
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 1px;
    }

    ul {
        list-style: none;

        li {
            border-bottom: 1px solid #ccc;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            padding: 30px;
            border-radius: 4px;
            cursor: pointer;
            transition: .3s;
            margin: 40px 0;

            &:hover {
                border-color: rgb(237,20,91);
            }

            h1 {

            }
            p {
                margin: 0;
                margin-top: 30px;
            }
            span {
                margin: 20px 0;
                display: block;
                font-weight: bold;
            }
        }
    }

    button {
        width: 100%;
        margin-bottom: 30px;
        background-color: ${mainColor};
        color: white;
        transition: .3s;    

        &:hover {
            color: white;
            background: ${mainColorDarker};
        }
    }
`