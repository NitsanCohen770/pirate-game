import styled from 'styled-components';
import { shipAnimation } from '../../data/shipAnimations';

export const ShipWrapper = styled.div`
  position: absolute;
  right: 0;
  left: -90px;
  top: 0;
  bottom: 0;
  height: 100%;
  transition: all 1s ease-in-out;
  animation: ship 30s;
  z-index: 2000;
  transform: rotate(-20deg);
  @keyframes ship {
    0% {
      right: 0;
      left: 0;
      top: -100px;
      transform: rotate(-20deg);
    }
    5% {
      left: 400px;
      top: -100px;
      transform: rotate(-20deg);
    }
    10% {
      left: 400px;
      top: -100px;
      transform: rotate(-20deg);
    }
    20% {
      left: 400px;
      top: -100px;
      transform: rotate(-20deg);
    }
    30% {
      left: 2000px;
      top: 0;
      transform: rotate(-20deg);
    }
    40% {
      left: 100px;
      top: 200px;
      transform: rotateY(-200deg);
    }
    50% {
      left: 200px;
      top: 250px;
      transform: rotateY(-200deg);
    }
    60% {
      left: 300px;
      top: 270px;
      transform: rotateY(-200deg);
    }
    70% {
      left: 400px;
      top: 270px;
      top: 270px;
      transform: rotateY(-200deg);
    }
    80% {
      left: 500px;
      top: 270px;
      top: 270px;
      transform: rotateY(-200deg);
    }
    80% {
      left: 600px;
      top: 270px;
      top: 270px;
      transform: rotateY(-200deg);
    }
  }
`;
