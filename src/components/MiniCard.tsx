import { Link } from "react-router-dom";

type Props= {
  image: string;
  id: number;
  name: string;
};

export default function MiniCard({
  image,
  id,
}: Props){
    return(
      <Link to={`/artist/${id}`} style={{ textDecoration: "none" }}>
        <div className="mini-card">
                <img src={image} alt="" />
        </div>
      </Link>
    )
}