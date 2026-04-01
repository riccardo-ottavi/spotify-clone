import { Link } from "react-router-dom"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function Header() {

    const { searchQuery, setSearchQuery, searchResults, playQueue } = useAudioPlayerContext();

    return (
        <header>
            <Link to={'/'}>
                <div>
                    <img src="../spoty-logo.jfif" alt="" />
                </div>
            </Link>
            <div className="header-mid">
                <img src="../house-solid-full.svg" alt="" />
                <div className="search-bar">
                    <img src="../magnifying-glass-solid-full.svg" alt="" />
                    <input
                        type="text"
                        placeholder="Cosa vuoi ascoltare?"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="search-results">
                        {searchQuery && searchResults.length > 0 ? (
                            searchResults.map((song) => (
                                <div
                                    key={song.id}
                                    className="search-result-item"
                                    onClick={() => playQueue([song], 0)}
                                >
                                    <img src={song.image} alt={song.title} />
                                    <div>
                                        <p>{song.title}</p>
                                        <span></span>
                                    </div>
                                </div>
                            ))
                        ) : searchQuery ? (
                            <p>Nessun risultato trovato</p>
                        ) : null}
                    </div>
                    <img src="../box-solid-full.svg" alt="" className="crate-icon border-left" />
                </div>
            </div>
            <div className="header-right">
                <div className="explore">
                    <h3>Esplora premium</h3>
                </div>
                <div className="download-button">
                    <img src="../arrow-down-solid-full.svg" alt="" className="circle-gray" />
                    <p>Installa app</p>
                </div>
                <img src="../bell-solid-full.svg" alt="" />
                <img src="../people-group-solid-full.svg" alt="" />
                <div className="account-icon">
                    R
                </div>
            </div>

        </header>
    )
}