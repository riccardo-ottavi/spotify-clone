import './App.css'
import EmptyScreen from './components/EmptyScreen';
import Footer from './components/Footer'
import Header from './components/Header'
import MiniCard from './components/MiniCard';
import OrizzontalCard from './components/OrizzontalCard';
import SquaredCard from './components/SquaredCard';

function App() {

  const songs = [
  { id: 1, title: "Stay with me", image:"../stranger.jpeg", artist:"Non ricordo" },
  { id: 2, title: "Flyday Chinatown",  image:"../stranger.jpeg", artist:"Non ricordo 2"},
  { id: 3, title: "Where is my mind", image:"../stranger.jpeg", artist:"Pixies"},
  { id: 4, title: "Make money like bettino", image:"../stranger.jpeg", artist:"Gionni Gioielli"},
  { id: 5, title: "Stay with me", image:"../stranger.jpeg",artist:"Non ricordo" },
  { id: 6, title: "Flyday Chinatown",  image:"../stranger.jpeg", artist:"Non ricordo 2"},
  { id: 7, title: "Where is my mind", image:"../stranger.jpeg", artist:"Pixies"},
  { id: 8, title: "Make money like bettino", image:"../stranger.jpeg", artist:"Gionni Gioielli"}
];

  return (
    <>
      <section className="header">
        <Header />
      </section>

      <section className="middle-big-box">
        <div className="left-mid custom-scrollbar">
          <img src="../layer-group-solid-full.svg" alt="" className='icon' />
          <img src="../plus-solid-full.svg" alt="" className='icon'/>
          <div className="mini-cards-container">
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

          <h2>Creato per: User</h2>
          <div className="squared-cards-container">
            {songs.map((c)=>(
              <SquaredCard 
                image={c.image}
                title={c.title} 
                artist={c.artist}              
              />
            ))}
          </div>

          <h2>Consigliata per oggi</h2>
          <div className="squared-cards-container">
            {songs.map((c)=>(
              <SquaredCard 
                image={c.image}
                title={c.title} 
                artist={c.artist}              
              />
            ))}
          </div>

          <div className="links">
            <nav>
              <h4>Azienda</h4>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
            </nav>
            <nav>
              <h4>Community</h4>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
            </nav>
            <nav>
              <h4>Link utili</h4>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
            </nav>
            <nav>
              <h4>Piani Spotify</h4>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
              <a href="">Chi siamo</a>
            </nav>
            <nav style={{ display: "flex", flexDirection: "row" }}>
              <img src="../instagram-brands-solid-full.svg" alt="" />
              <img src="../twitter-brands-solid-full.svg" alt="" />
              <img src="../facebook-brands-solid-full.svg" alt="" />
            </nav>
          </div>

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
