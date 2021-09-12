import React from 'react';
import { RollDiceButtonWrapper } from './styles';
import Dice from '../../assets/dice/2.png';

interface RollDiceButtonProps {}

export const RollDiceButton: React.FC<RollDiceButtonProps> = () => {
  const [diceNumber, setDiceNumber] = React.useState<number>(3);

  const rollDiceHandler = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    setDiceNumber(randomNumber);
  };

  return (
    <>
      <RollDiceButtonWrapper onClick={rollDiceHandler}>
        Roll Dice
      </RollDiceButtonWrapper>
      <img
        style={{ marginBottom: '20px' }}
        src={require(`../../assets/dice/${diceNumber}.png`).default}
        alt={`Dice number `}
      />
    </>
  );
};
