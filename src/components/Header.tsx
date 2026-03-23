export default function Header(){
    return(
        <header>
          {/* header*/}
          <img src="../spoty-logo.jfif" alt="" />
          <img src="../house-solid-full.svg" alt="" />
          <input type="text" placeholder="Cosa vuoi ascoltare?" />
            <div className="explore">
                <h3>Esplora premium</h3>
            </div>
            <img src="../arrow-down-solid-full.svg" alt="" />
            <p>installa app</p>
            <img src="../bell-solid-full.svg" alt="" />
            <img src="../people-group-solid-full.svg" alt="" />
            <div className="account-icon">
                R
            </div>
        </header>
    )
}