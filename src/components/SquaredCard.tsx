
type Props = {
  image: string;
  title: string;
};


export default function SquaredCard({
  image,
  title
}: Props){

    return (
        <div className="squared-card">
                <img src={image} alt="" />
                <span>{title}</span>
              </div>
    )
}