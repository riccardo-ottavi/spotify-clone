import type { FooterProps } from "../types/types";


export default function Footer({
    progress,
    togglePlay,
    isPlaying,
    audioRef,
    volume,
    setVolume,
    currentSong,
}: FooterProps) {

    function formatTime(seconds: number | undefined) {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    const currentTime = audioRef.current?.currentTime;
    const duration = audioRef.current?.duration;

    return (
        <footer>
            <div className="left-footer">
                <img src={currentSong?.image} alt="" />
                <div className="track-text-infos">
                    <h4>{currentSong?.title}</h4>
                    <span>{currentSong?.artist}</span>
                </div>
                <img src="../circle-plus-solid-full.svg" alt="" className="icon" />
            </div>
            <div className="mid-footer">
                <div className="buttons">
                    <img src="../shuffle-solid-full.svg" alt="" />
                    <img src="../backward-solid-full.svg" alt="" />
                    <img
                        src={isPlaying ? "../circle-pause-solid-full.svg" : "../circle-play-solid-full.svg"}
                        alt=""
                        id="main-play"
                        onClick={togglePlay}
                    />
                    <img src="../forward-solid-full.svg" alt="" />
                    <img src="../repeat-solid-full.svg" alt="" />
                </div>
                <div className="control-bar">
                    <span>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        value={progress || 0}
                        onChange={(e) => {
                            if (!audioRef.current || !audioRef.current.duration) return;

                            const newTime =
                                (Number(e.target.value) / 100) * audioRef.current.duration;

                            audioRef.current.currentTime = newTime;
                        }}
                    />
                    <span>{formatTime(duration)}</span>
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