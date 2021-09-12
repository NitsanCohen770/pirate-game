import React from 'react';
import { HandIconWrapper } from './styles';
import { FaRegHandPaper } from 'react-icons/fa';
interface HandIconProps {}

export const HandIcon: React.FC<HandIconProps> = () => {
  return (
    <HandIconWrapper>
      <div className='white_background'>
        <FaRegHandPaper size='3rem' />
      </div>
      <span>Browse Map</span>
    </HandIconWrapper>
  );
};
