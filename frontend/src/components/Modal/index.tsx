import React from 'react';
import { ModalWrapper } from './styles';

interface ModalProps {
  mainText: string;
  subText: string;
  winner: boolean;
}

export const Modal: React.FC<ModalProps> = ({ mainText, subText, winner }) => {
  return (
    <ModalWrapper>
      <h2>{winner ? 'Great' : 'Oh, too bad!'}</h2>
      <h2>{subText}</h2>
      <h1>{mainText}</h1>
      <button>Try Again</button>
    </ModalWrapper>
  );
};
