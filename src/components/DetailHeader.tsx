import type { DetailHeaderProps } from "../types/types"
import DetailButtons from "./DetailButtons";

export default function DetailHeader({
    type,
    title,
    bio,
    year,
    image
}: DetailHeaderProps) {
    if (type === "artist") {
        return (
            <>
                <div className="detail-header-artist">
                    <h1>{title}</h1>
                </div>
                <DetailButtons />
            </>
        );
    }

    if (type === "album") {
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
                <DetailButtons />
            </>
        );
    }

    if (type === "playlist") {
        return (
            <>
                <div className="detail-header">
                    <h2>{title}</h2>
                    <span>Playlist</span>
                </div>
                <DetailButtons />
            </>
        );
    }

    return null;
}