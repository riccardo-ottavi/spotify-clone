import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import type { Song, CollectionViewProps } from "../types/types";
import SquaredCard from "../components/SquaredCard";

export default function CollectionView({
  type,
  artistId,
  albumId,
  playlistId,
  bio,
  albumSongs,
  title
}: CollectionViewProps) {
  const {
    getSongsFromArtist,
    getSongsFromAlbum,
    getSongsFromPlaylist,
    setCurrentSong
  } = useAudioPlayerContext();

  let songs: Song[] = [];

  if (type === "artist" && artistId !== undefined) {
    songs = getSongsFromArtist(artistId);
  } else if (type === "album" && albumId !== undefined) {
    songs = getSongsFromAlbum(albumId);
  } else if (type === "playlist" && playlistId !== undefined) {
    songs = getSongsFromPlaylist(playlistId);
  } else if (type === "album" && albumSongs) {
    songs = albumSongs; // fallback se passi direttamente le canzoni
  }

  if (songs.length === 0) {
    return <p style={{ color: "white", marginLeft: "35px" }}>Nessuna canzone da mostrare</p>;
  }

  return (
    <section style={{ marginLeft: "35px", marginBottom: "30px" }}>
      {title && <h2>{title}</h2>}
      {bio && <p style={{ color: "white", marginBottom: "20px" }}>{bio}</p>}
      <div className="squared-cards-container">
        {songs.map((song) => (
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
}