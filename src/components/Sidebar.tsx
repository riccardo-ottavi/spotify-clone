import MiniCard from "./MiniCard"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { Link } from "react-router-dom";


export default function Sidebar() {

  const {artists, albums } = useAudioPlayerContext();
  

  return (
    <div className="left-mid custom-scrollbar">
      <div className="mini-cards-container">
        <img src="/layer-group-solid-full.svg" alt="" className='icon' />
        <img src="/plus-solid-full.svg" alt="" className='icon' />

        {artists.map((a) => (
          <Link to={`/artist/${a.id}`} style={{ textDecoration: "none" }}>
          <MiniCard
            key={a.id}
            image={a.image}
            id={a.id}
            name={a.name}
            type="artist"
          /></Link>
        ))}
        {albums.map((a) => (
          <Link to={`/album/${a.id}`} style={{ textDecoration: "none" }}>
          <MiniCard
            key={a.id}
            image={a.image}
            id={a.id}
            name={a.title}
            type="album"
          />
          </Link>
        ))}
      </div>
    </div>
  );
}