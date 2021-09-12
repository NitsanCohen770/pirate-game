import React from 'react';
import { IslandWrapper } from './styles';
import Isl from '../../assets//01 (1).png';
import { IslandWrapperProps } from '../../shared/interfaces';

interface IslandProps extends IslandWrapperProps {
  title: string;
}

const Island: React.FC<IslandProps> = ({ position, title }) => {
  return (
    <IslandWrapper position={position}>
      <img src={Isl} alt={title} />
    </IslandWrapper>
  );
};

export default Island;
