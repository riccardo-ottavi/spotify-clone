import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { CollectionView } from "./CollectionView";

interface ArtistPageProps {
  artistId: number;
}

export default function ArtistPage({ artistId }: ArtistPageProps) {
  const { artists, getSongsFromArtist } = useAudioPlayerContext();

  const artist = artists.find(a => a.id === artistId);
  const artistSongs = artist ? getSongsFromArtist(artist.id) : [];

  if (!artist) {
    return <p style={{ color: "white", marginLeft: "35px" }}>Artista non trovato</p>;
  }

  return (
    <section>
      {/* Se vuoi mostrare immagine e bio */}
      <div style={{ display: "flex", alignItems: "center", margin: "20px 35px" }}>
        <img src={artist.image} alt={artist.name} style={{ width: "120px", height: "120px", borderRadius: "8px", marginRight: "20px" }} />
        <div>
          <h1 style={{ color: "white" }}>{artist.name}</h1>
          <p style={{ color: "lightgray" }}>{artist.bio}</p>
        </div>
      </div>

      {/* Lista canzoni */}
      <CollectionView title="Canzoni" songs={artistSongs} />
    </section>
  );
}