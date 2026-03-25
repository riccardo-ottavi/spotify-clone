import MiniCard from "./MiniCard"


const songs = [
    { id: 1, title: "Stay with me", image: "../stranger.jpeg", artist: "Non ricordo", audio: "../fah.mp3" },
    { id: 2, title: "Flyday Chinatown", image: "../youg.jpeg", artist: "Non ricordo 2", audio: "../fah.mp3" },
    { id: 3, title: "Where is my mind", image: "../aquietplace.jpeg", artist: "Pixies", audio: "../fah.mp3" },
    { id: 4, title: "Make money like bettino", image: "../metal_lifting.jpg", artist: "Gionni Gioielli", audio: "../fah.mp3" },
    { id: 5, title: "Stay with me", image: "../mixdaily.jpeg", artist: "Non ricordo", audio: "../fah.mp3" },
    { id: 6, title: "Flyday Chinatown", image: "../split.jpeg", artist: "Non ricordo 2", audio: "../fah.mp3" },
];

export default function Sidebar() {

  return (
    <div className="left-mid custom-scrollbar">
      <div className="mini-cards-container">
        <img src="/layer-group-solid-full.svg" alt="" className='icon' />
        <img src="/plus-solid-full.svg" alt="" className='icon' />

        {songs.map((c) => (
          <MiniCard
            key={c.id}
            image={c.image}
          />
        ))}
      </div>
    </div>
  );
}