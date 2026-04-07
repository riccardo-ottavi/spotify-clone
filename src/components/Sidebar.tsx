import MiniCard from "./MiniCard"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { Link, useNavigate } from "react-router-dom";


export default function Sidebar() {

  const { artists, albums, playlists, createPlaylist } = useAudioPlayerContext();
  const navigate = useNavigate();


  return (
    <div className="left-mid custom-scrollbar">
      <img src="/layer-group-solid-full.svg" alt="" className='icon' />

      <img
        src="/plus-solid-full.svg"
        alt=""
        className='icon'
        onClick={async () => {
          const newPlaylist = await createPlaylist();
          if (newPlaylist) {
            navigate(`/playlist/${newPlaylist.id}`);
          }
        }}
      />

      <div className="mini-cards-container custom-scrollbar">
        {artists.map((a) => (
          <Link key={a.id} to={`/artist/${a.id}`} style={{ textDecoration: "none" }}>
            <MiniCard
              image={a.image}
              id={a.id}
              name={a.name}
              type="artist"
            />
          </Link>
        ))}
        {albums.map((a) => (
          <Link key={a.id} to={`/album/${a.id}`} style={{ textDecoration: "none" }}>
            <MiniCard
              image={a.image}
              id={a.id}
              name={a.title}
              type="album"
            />
          </Link>
        ))}
        {playlists.map((p) => (
          <Link key={p.id} to={`/playlist/${p.id}`} style={{ textDecoration: "none" }}>
            <MiniCard
              image={p.image}
              id={p.id}
              name={p.name}
              type="playlist"
            />
          </Link>
        ))}

      </div>
    </div>
  );
}