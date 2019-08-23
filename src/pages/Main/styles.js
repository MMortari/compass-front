import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
    width: 100%;
`
export const CardPerguntas = styled.div`
    width: 700px;
    min-height: 500px;
    max-height: 75vh;
    background-color: white;
    border-radius: 8px;
    padding: 22px 50px 40px;

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
            font-size: 22px;   
            margin-bottom: 20px;     
        }
        span {
            font-size: 12px;
            color: #828282;
            text-align: justify
        }
    }

    .resp {
        margin: 30px 0 15px;
        color: #818181;
        textarea {
            width: 100%;
            min-height: 200px;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 16px;
            font-size: 12px;
        }
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

    .btns {
        display: flex;
        justify-content: space-between;

        button {
            background-color: rgb(237,20,91);
            padding: 12px 20px;
            border: none;
            color: white;
            font-size: 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;

            svg {
                margin: 0 10px;
            }
        }
    }
`