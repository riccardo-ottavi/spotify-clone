
type Props = {
  image: string;
  title: string;
  artist: string;
  onClick?: () => void;
};


export default function SquaredCard({
  image,
  title,
  artist,
  onClick
}: Props){

    return (
        <div className="squared-card"  onClick={onClick}>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <span>{artist}</span>
              </div>
    )
}