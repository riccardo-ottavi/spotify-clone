import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function Layout() {
  const {
    currentSong,
    togglePlay,
    isPlaying,
    volume,
    setVolume,
    progress,
    audioRef
  } = useAudioPlayerContext();

  return (
    <>
    
      <section className="header">
        <Header />
      </section>

      <section className="middle-big-box">
        
        <Sidebar />

        <div className="big-mid custom-scrollbar">
          <Outlet />
        </div>

        <RightPanel
          currentSong={currentSong}
          image={currentSong?.image}
          title={currentSong?.title}
          artist={currentSong?.artist}
        />
      </section>

      <section className="footer">
        <Footer
          progress={progress}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          audioRef={audioRef}
          volume={volume}
          setVolume={setVolume}
          currentSong={currentSong}
        />
      </section>
    </>
  );
}