export default function Footer() {
    return (
        <footer>
            <div className="left-footer">
                <h4>Eventualmente traccia</h4>
            </div>
            <div className="mid-footer">
                <img src="../shuffle-solid-full.svg" alt="" />
                <img src="../backward-solid-full.svg" alt="" />
                <img src="../circle-play-solid-full.svg" alt="" />
                <img src="../forward-solid-full.svg" alt="" />
                <img src="../repeat-solid-full.svg" alt="" />
                <input
                    type="range"
                    min="0"
                    max="100"
                />
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