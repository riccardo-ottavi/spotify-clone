import type { FooterProps } from "../types/types";
import { useState } from "react";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function Footer({
    togglePlay,
    isPlaying,
    audioRef,
    volume,
    setVolume,
    currentSong,
    progress,
    artistName
}: FooterProps) {

    const [dragProgress, setDragProgress] = useState<number | null>(null);
    const { playNextSong, playPreviousSong } = useAudioPlayerContext()
    

    function formatTime(seconds: number | undefined) {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    const duration = audioRef.current?.duration || 0;
    const currentTime = duration ? duration * (progress / 100) : 0;


    return (
        <>
        <footer>
            <div className="left-footer">
                <img src={currentSong?.image} alt="" />
                <div className="track-text-infos">
                    <h4>{currentSong?.title}</h4>
                    <span>{artistName}</span>
                </div>
                <img src="../circle-plus-solid-full.svg" alt="" className="icon" />
            </div>
            <div className="mid-footer main-player">
                <div className="buttons">
                    <img src="../shuffle-solid-full.svg" alt="" />
                    <img 
                        src="../backward-solid-full.svg" 
                        alt="" 
                       onClick={playPreviousSong}
                    />
                    <img
                        src={isPlaying ? "../circle-pause-solid-full.svg" : "../circle-play-solid-full.svg"}
                        alt=""
                        id="main-play"
                        onClick={togglePlay}
                    />
                    <img 
                        src="../forward-solid-full.svg" 
                        alt="" 
                        onClick={playNextSong}
                    />
                    <img src="../repeat-solid-full.svg" alt="" />
                </div>
                <div className="control-bar">
                    <span>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={dragProgress !== null ? dragProgress : progress}
                        onChange={(e) => setDragProgress(Number(e.target.value))}
                        onMouseUp={(e) => {
                            if (!audioRef.current) return;
                            const newTime = (Number(e.currentTarget.value) / 100) * audioRef.current.duration;
                            audioRef.current.currentTime = newTime;
                            setDragProgress(null);  
                        }}
                        onTouchEnd={(e) => {
                            if (!audioRef.current) return;
                            const newTime = (Number(e.currentTarget.value) / 100) * audioRef.current.duration;
                            audioRef.current.currentTime = newTime;
                            setDragProgress(null);
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
        </>
    )
}