import React from 'react';
import { RollDiceButtonWrapper } from './styles';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { diceState, gameState } from '../../recoil/atoms/';

interface RollDiceButtonProps {}

export const RollDiceButton: React.FC<RollDiceButtonProps> = () => {
  const [diceNumber, setDiceNumber] = useRecoilState(diceState);
  const setGameState = useSetRecoilState(gameState);

  const rollDiceHandler = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    setDiceNumber(randomNumber);
    setGameState(true);
    console.log(diceNumber);
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
