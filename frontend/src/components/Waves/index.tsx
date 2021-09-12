import React from 'react';
import Waves from '../../assets/Waves.png';
import { WavesWrapper } from './styles';

const WavesAnimation: React.FC = () => {
  return (
    <WavesWrapper>
      <img src={Waves} alt='Sea background' />
    </WavesWrapper>
  );
};

export default WavesAnimation;
