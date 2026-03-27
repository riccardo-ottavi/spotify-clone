import { useParams } from "react-router-dom";
import CollectionView from "./CollectionView";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function ArtistPage() {
  const { id } = useParams<{ id: string }>();
  const { getSongsFromArtist, artists,  } = useAudioPlayerContext();

  if (!id) return <p>Artista non trovato</p>;

  const artistId = Number(id);
  const artist = artists.find(a => a.id === artistId);

  if (!artist) return <p>Artista non trovato</p>;

  return (
    <CollectionView
      type="artist"
      artistId={artistId}
      title={artist.name}
      bio={artist.bio}

    />
  );
}