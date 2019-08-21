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

        a {
            border-radius: 50%;
            width: 8px;
            height: 8px;
            display: block;
            background: #ccc;
            margin: 0 5px;

            &:hover {
                background: #828282
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
        textarea {
            width: 100%;
            min-height: 200px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-top: 30px;
            padding: 16px;
            color: #818181;
            font-size: 12px;
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
        }
    }
`