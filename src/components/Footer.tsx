type Props = {
    progress: number;
    togglePlay: () => void;
    isPlaying: boolean;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    volume: number;
    setVolume: (value: number) => void;
};

export default function Footer({
    progress,
    togglePlay,
    isPlaying,
    audioRef,
    volume,
    setVolume
}: Props) {

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
                    <img
                        src="../circle-play-solid-full.svg"
                        alt=""
                        id="main-play"
                        onClick={togglePlay}
                    />
                    <img src="../forward-solid-full.svg" alt="" />
                    <img src="../repeat-solid-full.svg" alt="" />
                </div>
                <div className="control-bar">
                    <span>0:00</span>
                    <input
                        type="range"
                        value={progress}
                        onChange={(e) => {
                            if (!audioRef.current) return;

                            const newTime =
                                (Number(e.target.value) / 100) * audioRef.current.duration;

                            audioRef.current.currentTime = newTime;
                        }}
                    />
                    <span>2:28</span>
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
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                />
                <img src="../chromecast-brands-solid-full.svg" alt="" />
                <img src="../expand-solid-full.svg" alt="" />
            </div>
        </footer>
    )
}