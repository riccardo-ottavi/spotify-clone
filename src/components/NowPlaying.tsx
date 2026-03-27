type Props = {
  image: string;
  title: string;
  artist?: string;    
  bio?: string;
  album?: string;
  year?: number;
};

export default function NowPlaying({
  image,
  title,
  artist,
  bio,
  album,
  year,
}: Props) {
  return (
    <div className="now-playing">
      {artist && <p>{artist}</p>}
      <img src={image} alt={title} />
      <p>{title}</p>
      {album && <p>{album}</p>}
      {year && <p>{year}</p>}
      {bio && <p>{bio}</p>}
    </div>
  );
}