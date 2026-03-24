import './App.css'
import EmptyScreen from './components/EmptyScreen';
import Footer from './components/Footer'
import Header from './components/Header'
import Links from './components/Links';
import MiniCard from './components/MiniCard';
import OrizzontalCard from './components/OrizzontalCard';
import SquaredCard from './components/SquaredCard';

function App() {

  const songs = [
    { id: 1, title: "Stay with me", image: "../stranger.jpeg", artist: "Non ricordo" },
    { id: 2, title: "Flyday Chinatown", image: "../youg.jpeg", artist: "Non ricordo 2" },
    { id: 3, title: "Where is my mind", image: "../aquietplace.jpeg", artist: "Pixies" },
    { id: 4, title: "Make money like bettino", image: "../metal_lifting.jpg", artist: "Gionni Gioielli" },
    { id: 5, title: "Stay with me", image: "../mixdaily.jpeg", artist: "Non ricordo" },
    { id: 6, title: "Flyday Chinatown", image: "../split.jpeg", artist: "Non ricordo 2" },
    { id: 7, title: "Where is my mind", image: "../radar.jpeg", artist: "Pixies" },
    { id: 8, title: "Make money like bettino", image: "../sinister.jpeg", artist: "Gionni Gioielli" }
  ];

  return (
    <>
      <section className="header">
        <Header />
      </section>

      <section className="middle-big-box">
        <div className="left-mid custom-scrollbar">

          <div className="mini-cards-container">
            <img src="../layer-group-solid-full.svg" alt="" className='icon' />
            <img src="../plus-solid-full.svg" alt="" className='icon' />
            {songs.map((c) => (
              <MiniCard
                image={c.image}
              />
            ))}
          </div>
        </div>
        <div className="big-mid custom-scrollbar">
          <div className="main-nav">
            <nav>
              <a href="">Tutto</a>
              <a href="">Musica</a>
              <a href="">Podcast</a>
            </nav>
          </div>

          <div className='orizzontal-cards-container'>
            {songs.map((c) => (
              <OrizzontalCard
                image={c.image}
                title={c.title}
              />
            ))}
          </div>

          <section>
            <div className="title-section">
              <h2>Creato per: User</h2>
            </div>
            <div className="squared-cards-container">
              {songs.map((c) => (
                <SquaredCard
                  image={c.image}
                  title={c.title}
                  artist={c.artist}
                />
              ))}
            </div>
          </section>
          <section>
            <div className="title-section">
              <h2>Consigliata per oggi</h2>
            </div>
            <div className="squared-cards-container">
              {songs.map((c) => (
                <SquaredCard
                  image={c.image}
                  title={c.title}
                  artist={c.artist}
                />
              ))}
            </div>
          </section>

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
        <div className="right-mid">
          <EmptyScreen />
        </div>
      </section>

      <section className="footer">
        <Footer />
      </section>
    </>
  )
}

export default App
