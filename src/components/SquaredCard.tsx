
type Props = {
  image: string;
  title: string;
  artist: string
};


export default function SquaredCard({
  image,
  title,
  artist
}: Props){

    return (
        <div className="squared-card">
                <img src={image} alt="" />
                <h3>{title}</h3>
                <span>{artist}</span>
              </div>
    )
}