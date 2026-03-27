import SquaredCard from "../components/SquaredCard";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import type { CollectionViewProps } from "../types/types";

export const CollectionView = ({ title, songs }: CollectionViewProps) => {
  const { setCurrentSong } = useAudioPlayerContext();

  return (
    <section style={{ marginLeft: "35px" }}>
      <h2>{title}</h2>

      <div className="squared-cards-container">
        {songs.map(song => (
          <SquaredCard
            key={song.id}
            image={song.image}
            title={song.title}
            artist={song.artist}
            onClick={() => setCurrentSong(song)}
          />
        ))}
      </div>
    </section>
  );
};