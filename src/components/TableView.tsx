import type { Song } from "../types/types"

type Props = {
    songs: Song[]
}

export default function TableView({ songs }: Props){
    return(
        <>
        
            <div className="detail-buttons">
                <div className="play-hover-big"></div>
                <img src="../play-solid-full.svg" alt="" />
                <img src="../shuffle-solid-full.svg" alt="" />
                <span>Segui</span>
                <div className="info-button">
                    <img src="../circle-solid-full.svg" alt="" />
                    <img src="../circle-solid-full.svg" alt="" />
                    <img src="../circle-solid-full.svg" alt="" />
                </div>
                
            </div>
        
            <div className="detail-cards-container">
                {songs.map((s, index) => (
                <div className="detail-song-card">
                    <span>{index+1}</span>
                    <img src={s.image} alt={s.title} />
                    <span>{s.title}</span>
                </div>
            ))}
            </div>
        </>
    )
}