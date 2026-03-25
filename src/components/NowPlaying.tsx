type Props = {
    image: string;
    title: string;
    artist: string;
}


export default function NowPlaying({
  image,
  title,
  artist
}: Props){
    return(
        <div className="now-playing">
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{artist}</p>
        </div>
    )
}