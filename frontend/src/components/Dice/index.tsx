import React from 'react';
import Dice from 'react-dice-roll';

interface DiceProps {}

export const DiceButton: React.FC<DiceProps> = () => {
  return <Dice onRoll={value => console.log(value)} />;
};
