import { useParams } from "react-router-dom";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { CollectionView } from "./CollectionView";
import type { Song } from "../types/types";

export default function AlbumPage() {
  const { id } = useParams();
  const { albums, songs } = useAudioPlayerContext();

  const album = albums.find(a => a.id === Number(id));

  if (!album) {
    return <p style={{ color: "white", marginLeft: "35px" }}>Album non trovato</p>;
  }

  const albumSongs: Song[] = album.songIds
    .map(id => songs.find(s => s.id === id))
    .filter((s): s is Song => !!s);

  return (
    <CollectionView
      title={album.title}
      songs={albumSongs}
    />
  );
}