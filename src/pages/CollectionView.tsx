import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import type { Song, CollectionViewProps } from "../types/types";
import TableView from "../components/TableView";
import DetailHeader from "../components/DetailHeader";

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

  if (songs.length === 0) {
    return <p style={{ color: "white" }}>Nessuna canzone da mostrare</p>;
  }

  return (
    <section style={{ marginBottom: "30px"}}>
      <DetailHeader
        type={type}
        title={title}
        bio={bio}
        year={year}
        image={image}
      />
      <TableView
        songs={songs}
      />
    </section>
  );
}