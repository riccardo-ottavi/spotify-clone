import { useParams } from "react-router-dom";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import type { Song } from "../types/types";
import { CollectionView } from "./CollectionView";

export default function PlaylistPage() {
  const { id } = useParams();
  const { playlists, songs } = useAudioPlayerContext();

  const playlist = playlists.find(p => p.id === Number(id));

  if (!playlist) {
    return (
      <p style={{ color: "white", marginLeft: "35px" }}>
        Playlist non trovata
      </p>
    );
  }

  const playlistSongs: Song[] = playlist.songIds
    .map(id => songs.find(s => s.id === id))
    .filter((s): s is Song => !!s);

  return (
    <CollectionView
      title={playlist.name}
      songs={playlistSongs}
    />
  );
}