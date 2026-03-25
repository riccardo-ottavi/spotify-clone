import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Links from './components/Links';
import MyNavBar from './components/MyNavBar';
import OrizzontalCard from './components/OrizzontalCard';
import RightPanel from './components/RightPanel';
import Sidebar from './components/Sidebar';
import SquaredCard from './components/SquaredCard';
import VerticalCard from './components/VerticalCard';
import { AudioPlayerProvider, useAudioPlayerContext } from './contexts/AudioPlayerContext';
import { useRef } from 'react';

function App() {
  return (
    <AudioPlayerProvider>
      <AppContent />
    </AudioPlayerProvider>
  )
}

function AppContent() {
  const { currentSong, setCurrentSong, isPlaying, togglePlay, volume, setVolume, progress, audioRef, songs} = useAudioPlayerContext();
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const { clientWidth, scrollLeft } = containerRef.current;
    const scrollAmount = clientWidth * 0.8;
    containerRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <audio ref={audioRef} />

      <section className="header">
        <Header />
      </section>

      <section className="middle-big-box">
        <Sidebar />

        <div className="big-mid custom-scrollbar">
          <MyNavBar />

          <div className="gradient">
            <div className='orizzontal-cards-container'>
              {songs.slice(0, 6).map((c) => (
                <OrizzontalCard
                  key={c.id}
                  image={c.image}
                  title={c.title}
                  onClick={() => setCurrentSong(c)}
                />
              ))}
            </div>
          </div>

          <section>
            <div className="title-section">
              <h2>Creato per: User</h2>
            </div>

            <div className="squared-cards-wrapper">
              <button className="scroll-left" onClick={() => scroll("left")}>{"<"}</button>

              <div className="squared-cards-container" ref={containerRef}>
                {songs.map((c) => (
                  <SquaredCard
                    key={c.id}
                    image={c.image}
                    title={c.title}
                    artist={c.artist}
                    onClick={() => setCurrentSong(c)}
                  />
                ))}
              </div>

              <button className="scroll-right" onClick={() => scroll("right")}>{">"}</button>
            </div>
          </section>

          <div className="vertical-cards-container">
            {songs.map((c) => (
              <VerticalCard key={c.id} image={c.image} title={c.title} />
            ))}
          </div>

          <hr />
          <Links />
          <hr />


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
  )
}

export default App