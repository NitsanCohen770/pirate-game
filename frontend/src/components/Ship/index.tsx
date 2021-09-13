import React, { useEffect, useRef } from 'react';
import Ship from '../../assets/Ship.png';
import { ShipWrapper } from './styles';
import { useMutation } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { gameState, diceState, modalState } from '../../recoil/atoms';
import { createUserAction } from '../../API/createUserAction';

export const ShipPlayer: React.FC = () => {
  const diceNumber = useRecoilValue(diceState);
  const isGameStart = useRecoilValue(gameState);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleModal = useSetRecoilState(modalState);
  const { isLoading, isError, error, mutate } = useMutation(createUserAction, {
    retry: 3,
  });

  const gameEndHandler = () => {
    mutate();
    setTimeout(() => {
      toggleModal(true);
    }, 1500);
  };

  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ShipWrapper
      isGameStart={isGameStart}
      onAnimationEnd={gameEndHandler}
      diceNumber={diceNumber}>
      <img src={Ship} alt='Sea background' />
      <input type='hidden' autoFocus ref={inputRef} />
    </ShipWrapper>
  );
};
