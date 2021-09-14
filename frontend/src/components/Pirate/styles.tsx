import styled from 'styled-components';
import { pirateAnimation } from '../../data/pirateAnimation';

interface PirateWrapperProps {
  diceNumber: number;
  isGameStart: boolean;
}

export const PirateWrapper = styled.div<PirateWrapperProps>`
  position: relative;
  right: 1459px;
  left: 279px;
  top: 197px;
  bottom: 611px;
  z-index: 1000;
  animation: ${({ isGameStart }) =>
    isGameStart && 'pirate 10s ease-in-out 0s forwards'};

  @keyframes pirate {
    ${({ diceNumber }) => pirateAnimation[diceNumber]}
  }
`;

// ${({ diceNumber }) => pirateAnimation[diceNumber]}
