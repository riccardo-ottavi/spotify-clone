import { useNavigate } from "react-router-dom";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

type Props = {
  image: string;
  title: string;
  artistName?: string;
  bio?: string;
  album?: string;
  artistPic: string;
  albumId?: number;
};

export default function NowPlaying({
  image,
  title,
  artistName,
  bio,
  album,
  artistPic,
  albumId,
}: Props) {
  const { queue, currentSong, artists } = useAudioPlayerContext();
  const navigate = useNavigate();

  const goToAlbum = () => {
    if (albumId) {
      navigate(`/album/${albumId}`);
    }
  };


  const currentIndex = queue?.findIndex(s => s.id === currentSong?.id) ?? -1;
  const nextSongs = currentIndex >= 0
  ? queue.slice(currentIndex + 1)
  : [];
  const artistMap = Object.fromEntries(artists.map(a => [a.id, a]));

  return (
    <div className="now-playing">
      <div className="now-playing-header">
        <img src="../minimize-solid-full.svg" alt="" className="hide" />
        {album && <h3>{album}</h3>}
        <img src="../circle-solid-full.svg" alt="" className="hide" />
        <img src="../circle-solid-full.svg" alt="" className="hide" />
        <img src="../circle-solid-full.svg" alt="" className="hide" />
        <img src="../expand-solid-full.svg" alt="" className="hide" />
      </div>
      <div className="track-infos" onClick={goToAlbum}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        {artistName && <span>{artistName}</span>}
        <img src="../circle-plus-solid-full.svg" alt="" className="add-fav" />
      </div>
      <div className="about-artist">
        <h4 className="absolute">Informazioni sull'artista</h4>
        <img src={artistPic} alt="" />
        <div className="about-text">
          {artistName && <h4>{artistName}</h4>}
          <div className="about-social">
            <p>325.235.234 ascoltatori mensili</p>
            <span className="follow">Segui</span>
          </div>
          {bio && <p>{bio}</p>}
        </div>
      </div>
      <div className="track-credits">
        <h3>Riconoscimenti</h3>
      </div>
      <div className="next-in-queue">
        <h3>Prossimo in coda</h3>
        <span>Apri coda</span>
        {nextSongs?.slice(0,1).map(song => (
          <div className="next-song-card" key={song.id}>
            <img src={song.image} alt="" />
            <span className="underline">{song.title}</span>
            <span className="underline">{artistMap[song.artistId]?.name}</span>
          </div>
          
        ))}
      </div>

    </div>
  );
}