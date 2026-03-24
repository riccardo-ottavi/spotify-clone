export default function Footer() {
    return (
        <footer>
            <div className="left-footer">
                <img src="../stranger.jpeg" alt="" />
                <div className="track-text-infos">
                    <h4>Nome traccia</h4>
                    <span>Nome artista</span>
                </div>
                <img src="../circle-plus-solid-full.svg" alt="" className="icon" />
            </div>
            <div className="mid-footer">
                <div className="buttons">
                    <img src="../shuffle-solid-full.svg" alt="" />
                    <img src="../backward-solid-full.svg" alt="" />
                    <img src="../circle-play-solid-full.svg" alt="" />
                    <img src="../forward-solid-full.svg" alt="" />
                    <img src="../repeat-solid-full.svg" alt="" />
                </div>
                <div className="control-bar">
                    0:00<input
                        type="range"
                        min="0"
                        max="100"
                    />2:28
                </div>
            </div>
            <div className="right-footer">
                <img src="../microphone-solid-full.svg" alt="" />
                <img src="../stack-exchange-brands-solid-full.svg" alt="" />
                <img src="../computer-solid-full.svg" alt="" />
                <img src="../volume-solid-full.svg" alt="" />
                <input
                    type="range"
                    min="0"
                    max="100"
                />
                <img src="../chromecast-brands-solid-full.svg" alt="" />
                <img src="../expand-solid-full.svg" alt="" />
            </div>
        </footer>
    )
}