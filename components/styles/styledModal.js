import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
`;

export const CloseIcon = styled.img`
  position: absolute;
  width: 18px;
  top: 5px;
  left: 5px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;
