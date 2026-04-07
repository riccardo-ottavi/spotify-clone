import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import type {CollectionViewProps } from "../types/types";
import TableView from "../components/TableView";
import EditPlaylistPage from "./EditPlaylistPage";
import Links from "../components/Links";

export default function CollectionView({
  type,
  artistId,
  albumId,
  playlistId,
  albumSongs,
  songs
}: CollectionViewProps) {
  const {
    getSongsFromArtist,
    getSongsFromAlbum,
  } = useAudioPlayerContext();

  // 🔥 PLAYLIST → delega completamente
  if (type === "playlist") {
    return (
      <section style={{ marginBottom: "30px" }}>
        <EditPlaylistPage />
      </section>
    );
  }


  if (type === "artist" && artistId !== undefined) {
    songs = getSongsFromArtist(artistId);
  } else if (type === "album" && albumId !== undefined) {
    songs = getSongsFromAlbum(albumId);
  } else if (type === "album" && albumSongs) {
    songs = albumSongs;
  }

  return (
    <section style={{ marginBottom: "30px" }}>
      {songs.length > 0 ? (
        <TableView songs={songs} />
      ) : (
        <p style={{ color: "white" }}>Nessuna canzone da mostrare</p>
      )}

      <Links />
      <hr />
    </section>
  );
}