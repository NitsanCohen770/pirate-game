import styled from 'styled-components';
import { shipAnimation } from '../../data/shipAnimations';

interface ShipWrapperProps {
  diceNumber: number;
  isGameStart: boolean;
}

export const ShipWrapper = styled.div<ShipWrapperProps>`
  position: absolute;
  right: 0;
  left: -90px;
  top: 0;
  bottom: 0;
  height: 100%;
  transition: all 1s ease-in-out;
  animation: ${({ isGameStart }) => isGameStart && 'ship 20s linear'};
  z-index: 2000;

  @keyframes ship {
    from {
      transform: rotate(0deg) translateX(150px);
    }
    to {
      transform: rotate(360deg) translateX(150px);
    }
  }
`;
