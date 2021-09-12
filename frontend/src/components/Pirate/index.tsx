import React from 'react';
import Pirate from '../../assets/Pirate.png';
import { PirateWrapper } from './styles';

export const PiratePlayer: React.FC = () => {
  return (
    <PirateWrapper>
      <img src={Pirate} alt='Sea background' />
    </PirateWrapper>
  );
};
