import {
  SeaBackground,
  Islands,
  WavesAnimation,
  PiratePlayer,
  Modal,
  ShipPlayer,
  SideBar,
} from './components';
import { useRecoilValue } from 'recoil';
import ScrollContainer from 'react-indiana-drag-scroll';
import { modalState, browseMapState } from './recoil/atoms';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const browseMap = useRecoilValue(browseMapState);
  const isModalOpen = useRecoilValue(modalState);

  useEffect(() => {
    axios.post('http://localhost:3001/users', {
      IP: '222.222.222.222',
      action: 'won',
    });
  }, []);

  return (
    <>
      {isModalOpen && <Modal />}

      <SideBar />
      <ScrollContainer
        vertical={browseMap}
        horizontal={browseMap}
        className='scroll'>
        <ShipPlayer />
        <SeaBackground />
        <WavesAnimation />
        <PiratePlayer />
        <Islands />
      </ScrollContainer>
    </>
  );
}

export default App;
