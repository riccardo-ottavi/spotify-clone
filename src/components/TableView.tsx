import type { Song } from "../types/types"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext"


type Props = {
    songs: Song[],
    onClick?: () => void;
}

export default function TableView({ songs }: Props) {

    const { setCurrentSong, currentSong } = useAudioPlayerContext();

    return (
        <>
            <div className="detail-cards-container">
                {songs.map((s, index) => {
                    const isActive = currentSong?.id === s.id;

                    return (
                        <div
                            key={s.id}
                            className={`detail-song-card ${isActive ? "active" : ""}`}
                            onClick={() => setCurrentSong(s)}
                        >
                            <div className="play-or-id">
                                
                                    <img className="detail-play" src="../play-solid-full-white.svg" alt="" />
                               
                                    <span className="detail-id">{index + 1}</span>
                              
                            </div>

                            <img src={s.image} alt={s.title} />

                            <span className={isActive ? "active-text" : ""}>
                                {s.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        </>
    )
}