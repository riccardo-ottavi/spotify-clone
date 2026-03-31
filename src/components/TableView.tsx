import type { Song } from "../types/types"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext"
import { useState, useEffect } from "react";

type Props = {
    songs: Song[],
    onClick?: () => void;
}

export default function TableView({ songs }: Props) {

    const { currentSong, playQueue, getAudioDuration, formatTime } = useAudioPlayerContext();
    const [durations, setDurations] = useState<Record<number, number>>({});

    useEffect(() => {
        songs.forEach(async (song) => {
            const duration = await getAudioDuration(song.audio);

            setDurations(prev => ({
                ...prev,
                [song.id]: duration
            }));
        });
    }, [songs]);

    return (
        <>
            <div className="detail-cards-container">
                {songs.map((s, index) => {
                    const isActive = currentSong?.id === s.id;

                    return (
                        <div
                            key={s.id}
                            className={`detail-song-card ${isActive ? "active" : ""}`}
                            onClick={() => playQueue(songs, index)}
                        >
                            <div className="play-or-id">
                                <img className="detail-play" src="../play-solid-full-white.svg" alt="" />
                                <span className="detail-id">{index + 1}</span>
                                
                            </div>

                            <img src={s.image} alt={s.title} />

                            <span className={isActive ? "active-text underline" : "underline"}>
                                {s.title}
                            </span>
                            <span className="absolute-right">
                                {durations[s.id] ? formatTime(durations[s.id]) : "--:--"}
                            </span>
                        </div>
                    );
                })}
            </div>
        </>
    )
}