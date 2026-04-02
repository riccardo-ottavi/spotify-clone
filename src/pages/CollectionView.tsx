import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import type { Song, CollectionViewProps } from "../types/types";
import TableView from "../components/TableView";
import DetailHeader from "../components/DetailHeader";
import Links from "../components/Links";
import EditPlaylistPage from "./EditPlaylistPage";

export default function CollectionView({
  type,
  artistId,
  albumId,
  playlistId,
  bio,
  albumSongs,
  title,
  year,
  image
}: CollectionViewProps) {
  const {
    getSongsFromArtist,
    getSongsFromAlbum,
    getSongsFromPlaylist,
  } = useAudioPlayerContext();

  let songs: Song[] = [];

  if (type === "artist" && artistId !== undefined) {
    songs = getSongsFromArtist(artistId);
  } else if (type === "album" && albumId !== undefined) {
    songs = getSongsFromAlbum(albumId);
  } else if (type === "playlist" && playlistId !== undefined) {
    songs = getSongsFromPlaylist(playlistId);
  } else if (type === "album" && albumSongs) {
    songs = albumSongs;
  }

  if (songs.length === 0 && type === "playlist") {
    return <EditPlaylistPage />;
  }

  if (songs.length === 0) {
    return <p style={{ color: "white" }}>Nessuna canzone da mostrare</p>;
  }

  return (
    <section style={{ marginBottom: "30px" }}>

      {type === "playlist" ? (
        <EditPlaylistPage />
      ) : (
        <TableView songs={songs} />
      )}

      {type !== "playlist" && <Links />}
      <hr />
    </section>
  );
}