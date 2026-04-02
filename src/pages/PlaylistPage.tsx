import { useParams } from "react-router-dom";
import CollectionView from "./CollectionView";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

export default function PlaylistPage() {
  const { id } = useParams<{ id: string }>();
  const { playlists } = useAudioPlayerContext();

  if (!id) return <p>playlist non trovata</p>;

  const playListId = Number(id);
  const playlist = playlists.find(a => a.id === playListId);

  if (!playlist) return <p>playlist non trovata</p>;

  return (
  <CollectionView
    type="playlist"
    playlistId={playlist.id}  
    title={playlist.name}
    image={playlist.image}
  />
);
}