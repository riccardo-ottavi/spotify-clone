type Props = {
  image: string;
  title: string;
  artistName?: string;
  bio?: string;
  album?: string;
  year?: number;
  artistPic: string;
};

export default function NowPlaying({
  image,
  title,
  artistName,
  bio,
  album,
  year,
  artistPic
}: Props) {
  return (
    <div className="now-playing">
      <div className="now-playing-header">
        <img src="../minimize-solid-full.svg" alt="" className="hide"/>
        {album && <p>{album}</p>}
        <div className="info-button">
          <img src="../circle-solid-full.svg" alt="" />
          <img src="../circle-solid-full.svg" alt="" />
          <img src="../circle-solid-full.svg" alt="" />
          <img src="../expand-solid-full.svg" alt="" />
        </div>
      </div>
      <div className="track-infos">
        <img src={image} alt={title} />
        <p>{title}</p>
        {artistName && <p>{artistName}</p>}
        <img src="../circle-plus-solid-full.svg" alt="" className="add-fav"/>
      </div>
      <div className="about-artist">
        <h3>Informazioni sull'artista</h3>
        <img src={artistPic} alt="" />
        {artistName && <p>{artistName}</p>}
        <p>325.235.234 ascoltatori mensili</p> <span>Segui</span>
        {year && <p>{year}</p>}
        {bio && <p>{bio}</p>}
      </div>
      <div className="track-credits">
        <h3>Riconoscimenti</h3>
      </div>
      <div className="next-in-queue">
        <h3>Prossimo in coda</h3>
      </div>
      
    </div>
  );
}