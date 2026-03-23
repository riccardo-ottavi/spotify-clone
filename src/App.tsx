import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <section className="header">
        <Header />
      </section>

      <section className="middle-big-box">
        <div className="left-mid">
          <h3>Sono la parte sinistra</h3>
        </div>
        <div className="big-mid">
          <nav>
            <a href="">Tutto</a>
            <a href="">Musica</a>
            <a href="">Podcast</a>
          </nav>

          <div className="orizzontal-cards-container">
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
          </div>
          <div className="orizzontal-cards-container">
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
          </div>
          <div className="orizzontal-cards-container">
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
          </div>
          <div className="orizzontal-cards-container">
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
          </div>
          <div className="orizzontal-cards-container">
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
          </div>
          <div className="orizzontal-cards-container">
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
          </div>
          <div className="orizzontal-cards-container">
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
            <div className="orizzontal-card">TItolo</div>
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
