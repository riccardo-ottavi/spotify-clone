import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  const orizzontalCards = [
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
        <div className="left-mid">
          <h3>Sono la parte sinistra</h3>
          <div className="mini-cards-container">
            {orizzontalCards.map((c) => (
              <div className="mini-card">
                <img src={c.image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="big-mid">
          <nav>
            <a href="">Tutto</a>
            <a href="">Musica</a>
            <a href="">Podcast</a>
          </nav>

          <div className='orizzontal-cards-container'>
            {orizzontalCards.map((c) => (
              <div className='orizzontal-card'> 
                <img src="" alt="" />
                <span>{c.title}</span>
              </div>
          ))}
          </div>

          <h5>Creato per User</h5>

          <div className="squared-cards-container">
            {orizzontalCards.map((c)=>(
              <div className="squared-card">
                <img src={c.image} alt="" />
                <span>{c.title}</span>
              </div>
            ))}
          </div>

          <h5>Consigliati per oggi</h5>

          <div className="squared-cards-container">
            {orizzontalCards.map((c)=>(
              <div className="squared-card">
                <img src={c.image} alt="" />
                <span>{c.title}</span>
              </div>
            ))}
          </div>

          <h5>Ascoltati di recente</h5>

          <div className="squared-cards-container">
            {orizzontalCards.map((c)=>(
              <div className="squared-card">
                <img src={c.image} alt="" />
                <span>{c.title}</span>
              </div>
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
