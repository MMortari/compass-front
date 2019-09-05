import styled from 'styled-components';

export const LoadingComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: white;
    font-size: 55px;
    animation: rotate .8s infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
