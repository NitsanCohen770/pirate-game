import styled from 'styled-components';

export const ModalWrapper = styled.div<{ isModalOpen: boolean }>`
  position: absolute;
  display: flex;
  visibility: ${({ isModalOpen }) => !isModalOpen && 'hidden'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 80vw;
  height: 80vh;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #000000;
  opacity: 0.8;
  z-index: 2000;
  color: #ffffff;
  font-weight: 250;
  font-size: 2rem;
  text-align: center;
  > h2 {
    width: fit-content;
    height: fit-content;
    margin: 0 0 0 0;
    font-weight: 50;
  }
`;
