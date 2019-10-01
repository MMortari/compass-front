import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: white;
  width: 100%;
  height: 50px;
  padding: 5px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;  

  h1 {
    font-weight: 100;
    letter-spacing: 2px;
  }
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
        background: rgb(237,20,91);
        border-radius: 50%;
        margin-right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
    }
`;

export const DropdownUser = styled.ul`

    display: ${props => !props.show && `none`};
    /* height: 150px; */
    width: 180px;
    position: absolute;
    top: 45px;
    right: 30px;

    /* border: 1px solid black; */
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    z-index: 1;

    li {
        list-style: none;
        text-align: right;

        a {
            display: block;
            padding: 6px 15px;
            color: #828282;

            &:hover {
                background: #e8e8e8;
                color: black;
            }
        }
    }

    hr {
        border: none;
        border-top: 1px solid #d8d8d8;
    }
`;
