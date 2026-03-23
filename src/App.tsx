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
          Sono la parte centrale 
        </div>
        <div className="right-mid">
          <h3>Sono la parte destra</h3>
        </div>
      </section>

      <section className="footer">
        <footer>
          {/* footer*/}
          <Footer />
        </footer>
      </section>
    </>
  )
}

export default App
