import React from 'react';
import { HandIcon, RollDiceButton } from '..';
import { SidebarWrapper } from './styles';

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = () => {
  return (
    <SidebarWrapper>
      <HandIcon />
      <RollDiceButton />
    </SidebarWrapper>
  );
};
