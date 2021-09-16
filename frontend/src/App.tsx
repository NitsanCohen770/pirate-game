import {
  SeaBackground,
  Islands,
  WavesAnimation,
  PiratePlayer,
  Modal,
  ShipPlayer,
  SideBar,
} from './components';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { FaBars } from 'react-icons/fa';
import ScrollContainer from 'react-indiana-drag-scroll';
import { browseMapState } from './recoil/atoms';
import { sidebarDisplayState, sidebarState } from './recoil/atoms/sidebar';

function App() {
  const browseMap = useRecoilValue(browseMapState);
  const toggleSidebar = useSetRecoilState(sidebarState);
  const [displaySidebar, setDisplaySidebar] =
    useRecoilState(sidebarDisplayState);

  const openSidebarHandler = () => {
    setDisplaySidebar(true);
    toggleSidebar(true);
  };

  return (
    <>
      <Modal />
      <SideBar />
      {!displaySidebar && (
        <FaBars
          className='open_sidebar'
          size='2rem'
          onClick={openSidebarHandler}
        />
      )}
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
