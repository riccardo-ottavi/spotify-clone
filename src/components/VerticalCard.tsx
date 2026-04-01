type Props = {
  image: string;
  title: string;
};

export default function VerticalCard({
  image,
  title
}: Props){
    return(
        <div 
            className="vertical-card"
            style={{ backgroundImage: `url(${image})` }}
        >
            <h3>{title}</h3>
        </div>
    )
}