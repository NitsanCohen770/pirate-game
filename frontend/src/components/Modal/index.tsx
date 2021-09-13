import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { fetchRandomMessage } from '../../API/fetchRandomMessage';
import { messages, rumMessages } from '../../data/messages';
import { diceState, modalState } from '../../recoil/atoms';
import { ModalWrapper } from './styles';

export const Modal: React.FC = () => {
  const toggleModal = useSetRecoilState(modalState);
  const diceNumber = useRecoilValue(diceState);
  const { data, error, isError, isLoading } = useQuery(
    'posts',
    fetchRandomMessage
  );

  let modalMessages = (() => messages[diceNumber])();
  if (!modalMessages) {
    const randomNumber = Math.round(Math.random());
    if (diceNumber === 2) modalMessages = rumMessages[randomNumber];
    else if (diceNumber === 4) modalMessages = data;
  }

  return (
    <ModalWrapper>
      <h2>{modalMessages?.winner ? 'Great' : 'Oh, too bad!'}</h2>
      <h2>{modalMessages?.subText}</h2>
      <h1>{modalMessages?.mainText}</h1>
      <button onClick={() => toggleModal(false)}>Try Again</button>
    </ModalWrapper>
  );
};
