import type { DetailHeaderProps } from "../types/types"
import { useParams } from "react-router-dom";
import DetailButtons from "./DetailButtons";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function DetailHeader({
    type,
    title,
    year,
    image
}: DetailHeaderProps) {
    if (type === "artist") {
        const { songs } = useAudioPlayerContext()
        return (
            <>
                <div className="detail-header-artist">
                    <h1>{title}</h1>
                </div>
                <DetailButtons 
                    songs={songs}
                />
            </>
        );
    }

    if (type === "album") {
        const { id } = useParams<{ id: string }>();
        const { getSongsFromAlbum } = useAudioPlayerContext();
        const albumSongs = id ? getSongsFromAlbum(Number(id)) : [];
        return (
            <>
                <div className="detail-header-album album">
                    <img src={image} alt="" />
                    <div className="text-infos">
                        <span>Album</span>
                        <h2>{title}</h2>
                        <h3>Sfaso</h3>
                        <span>{year}</span>
                    </div>

                </div>
                <DetailButtons
                    songs={ albumSongs }
                />
            </>
        );
    }

    if (type === "playlist") {
        const { id } = useParams<{ id: string }>();
        const { getSongsFromPlaylist } = useAudioPlayerContext();
        const playlistSongs = id ? getSongsFromPlaylist(Number(id)) : [];
        return (
            <>
                <div className="detail-header-album album">
                    <img src={image} alt="" />
                    <div className="text-infos">
                        <span>Playlist</span>
                        <h2>{title}</h2>
                        <h3>Sfaso</h3>
                    </div>

                </div>
                <DetailButtons 
                    songs={ playlistSongs }
                />
            </>
        );
    }

    return null;
}