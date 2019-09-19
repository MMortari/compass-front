import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 25px;
  text-align: center;
`;

export const ListVagas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const LittleCard = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  margin: 10px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, .2);
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;

  p {
    font-size: 18px;
    text-align: center;
  }
  ul {
    list-style: none;
  }
  small {
    text-align: center;
    display: block;
  }
`;