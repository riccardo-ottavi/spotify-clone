import NowPlaying from "./NowPlaying"
import EmptyScreen from "./EmptyScreen"
import type { Song } from "../types/types";

type Props= {
    image: string | undefined; 
    title: string | undefined;
    artist: string | undefined;
    currentSong: Song | null
}

export default function RightPanel({currentSong}: Props) {
    


    return (
        <div className="right-mid">
            {currentSong ? (
                <NowPlaying
                    image={currentSong.image}
                    title={currentSong.title}
                    artist={currentSong.artist} />
            ) : (
                <EmptyScreen />
            )}
        </div>
    )
}
