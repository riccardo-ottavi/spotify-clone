import { useParams } from "react-router-dom";
import CollectionView from "./CollectionView";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function ArtistPage() {
  const { id } = useParams<{ id: string }>();
  const { getSongsFromAlbum, albums } = useAudioPlayerContext();

  if (!id) return <p>Album non trovato</p>;

  const artistId = Number(id);
  const album = albums.find(a => a.id === artistId);

  if (!album) return <p>Artista non trovato</p>;

  return (
    <CollectionView
      type="album"
      albumId={album.id}
      title={album.title}
      year={album.year}
      image={album.image} 
    />
  );
}