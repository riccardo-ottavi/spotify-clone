import MiniCard from "./MiniCard"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";


export default function Sidebar() {

  const {artists, albums } = useAudioPlayerContext();
  

  return (
    <div className="left-mid custom-scrollbar">
      <div className="mini-cards-container">
        <img src="/layer-group-solid-full.svg" alt="" className='icon' />
        <img src="/plus-solid-full.svg" alt="" className='icon' />

        {artists.map((c) => (
          <MiniCard
            key={c.id}
            image={c.image}
            id={c.id}
            name={c.name}
          />
        ))}
        {albums.map((c) => (
          <MiniCard
            key={c.id}
            image={c.image}
            id={c.id}
            name={c.title}
          />
        ))}
      </div>
    </div>
  );
}