import React from 'react';
import {
  SeaBackground,
  Islands,
  WavesAnimation,
  PiratePlayer,
  Modal,
  ShipPlayer,
  SideBar,
} from './components';
import ScrollContainer from 'react-indiana-drag-scroll';

function App() {
  return (
    <>
      {/* <Modal
        mainText='You Win'
        subText='You landed on an island'
        winner={true}
      /> */}
      {/* <ShipPlayer /> */}
      <SideBar />
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
