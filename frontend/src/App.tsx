import React from 'react';
import Sea from './components/Sea';
import ScrollContainer from 'react-indiana-drag-scroll';
import WavesAnimation from './components/Waves';

function App() {
  return (
    <>
      <ScrollContainer vertical horizontal className='scroll'>
        <Sea />
        <WavesAnimation />
      </ScrollContainer>
    </>
  );
}

export default App;
