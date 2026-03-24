export default function Header() {
    return (
        <header>
            {/* header*/}
            <div>
                <img src="../spoty-logo.jfif" alt="" />
            </div>
            <div>
                <img src="../house-solid-full.svg" alt="" />
                <div className="search-bar">
                    <img src="../magnifying-glass-solid-full.svg" alt="" />
                    <input type="text" placeholder="Cosa vuoi ascoltare?" />
                </div>
            </div>
            <div>
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
            </div>

        </header>
    )
}