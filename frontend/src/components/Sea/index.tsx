import React from 'react';
import Sea from '../../assets/Sea.png';
import { SeaBackgroundWrapper } from './styles';

const SeaBackground: React.FC = () => {
  return (
    <SeaBackgroundWrapper>
      <img src={Sea} alt='Sea background' />
    </SeaBackgroundWrapper>
  );
};

export default SeaBackground;
