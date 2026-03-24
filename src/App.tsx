import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MiniCard from './components/MiniCard';
import OrizzontalCard from './components/OrizzontalCard';
import SquaredCard from './components/SquaredCard';

function App() {

  const songs = [
  { id: 1, title: "Stay with me", image:"../stranger.jpeg" },
  { id: 2, title: "Flyday Chinatown",  image:"../stranger.jpeg"},
  { id: 3, title: "Where is my mind", image:"../stranger.jpeg"},
  { id: 4, title: "Make money like bettino", image:"../stranger.jpeg"},
  { id: 5, title: "Stay with me", image:"../stranger.jpeg" },
  { id: 6, title: "Flyday Chinatown",  image:"../stranger.jpeg"},
  { id: 7, title: "Where is my mind", image:"../stranger.jpeg"},
  { id: 8, title: "Make money like bettino", image:"../stranger.jpeg"},
];

  return (
    <>
      <section className="header">
        <Header />
      </section>

      <section className="middle-big-box">
        <div className="left-mid custom-scrollbar">
          <h3>Sono la parte sinistra</h3>
          <div className="mini-cards-container">
            {songs.map((c) => (
              <MiniCard 
                image={c.image} 
              />
            ))}
          </div>
        </div>
        <div className="big-mid custom-scrollbar">
          <nav>
            <a href="">Tutto</a>
            <a href="">Musica</a>
            <a href="">Podcast</a>
          </nav>

          <div className='orizzontal-cards-container'>
            {songs.map((c) => (
              <OrizzontalCard 
                image={c.image} 
                title={c.title} 
              />
          ))}
          </div>

          <h5>Ascoltati di recente</h5>
          <div className="squared-cards-container">
            {songs.map((c)=>(
              <SquaredCard 
                image={c.image} 
                title={c.title}                         
              />
            ))}
          </div>

        </div>
        <div className="right-mid">
          <img src="../tablet.png" alt="" />
          <h3>Scarica Spotify per Windows</h3>
          <p>Approfitta di audio di alta qualità, riproduzione in modalità offline e Feed amici per non perderti i loro preferiti.</p>
          <button className="download-button-large">Scarica l'app gratuita</button>
        </div>
      </section>

      <section className="footer">
        {/* footer*/}
        <Footer />
      </section>
    </>
  )
}

export default App
