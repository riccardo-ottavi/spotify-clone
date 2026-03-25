import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Links from './components/Links';
import OrizzontalCard from './components/OrizzontalCard';
import RightPanel from './components/RightPanel';
import Sidebar from './components/Sidebar';
import SquaredCard from './components/SquaredCard';
import VerticalCard from './components/VerticalCard';
import { AudioPlayerProvider, useAudioPlayerContext } from './contexts/AudioPlayerContext';


function App() {
  return (
    <AudioPlayerProvider>
      <AppContent />
    </AudioPlayerProvider>
  )
}

function AppContent() {
  const { currentSong, setCurrentSong, isPlaying, togglePlay, volume, setVolume, progress, audioRef, songs } = useAudioPlayerContext();


  return (
    <>
      <audio ref={audioRef} />

      <section className="header">
        <Header />
      </section>

      <section className="middle-big-box">

        <Sidebar />

        <div className="big-mid custom-scrollbar">
          <div className="main-nav">
            <nav>
              <a href="">Tutto</a>
              <a href="">Musica</a>
              <a href="">Podcast</a>
            </nav>
          </div>

          <div className="gradient">
            <div className='orizzontal-cards-container'>
              {songs.map((c) => (
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
            <div className="squared-cards-container">
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
          </section>

          <div className="vertical-cards-container">
            {songs.map((c) => (
              <VerticalCard key={c.id} image={c.image} title={c.title} />
            ))}
          </div>

          <hr />
          <Links />
          <hr />

          <nav>
            <a href="">Informazioni legali</a>
            <a href="">Sicurezza e Centro sulla privacy</a>
            <a href="">Informativa sulla privacy</a>
            <a href="">Impostazioni cookie</a>
            <a href="">Info annunci</a>
            <a href="">Accessibilità</a>
          </nav>

          <span>© 2026 Spotify AB</span>

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