import React from 'react';
import {
  SeaBackground,
  Islands,
  WavesAnimation,
  PiratePlayer,
} from './components';
import ScrollContainer from 'react-indiana-drag-scroll';

function App() {
  return (
    <>
      <ScrollContainer vertical horizontal className='scroll'>
        <SeaBackground />
        <WavesAnimation />
        <PiratePlayer />
        <Islands />
      </ScrollContainer>
    </>
  );
}

export default App;
