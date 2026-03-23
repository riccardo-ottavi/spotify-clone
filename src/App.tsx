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


        </div>
        <div className="right-mid">
          <h3>Sono la parte destra</h3>
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
