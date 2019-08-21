import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  padding: 5px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;  
`;

export const UserPart = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
        font-size: 18px;
        margin-right: 10px;
    }
    .image {
        width: 30px;
        height: 30px;
        background: rgb(237, 20, 91);
        border-radius: 50%;
        margin-right: 15px;
    
    }
`;
