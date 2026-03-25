import React from "react";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import type { Song } from "../types/types";
import SquaredCard from "./SquaredCard";

interface SongsListViewProps {
  albumId?: number;      
  artistId?: number;     
  title?: string;         
}

const SongsListView: React.FC<SongsListViewProps> = ({ albumId, artistId, title }) => {
  const { songs, albums, getSongsFromArtist, setCurrentSong } = useAudioPlayerContext();

  let displayedSongs: Song[] = [];

  if (albumId) {
    const album = albums.find(a => a.id === albumId);
    if (album) {
      displayedSongs = album.songIds
        .map(id => songs.find(s => s.id === id))
        .filter((s): s is Song => !!s);  
    }
  } else if (artistId) {
    displayedSongs = getSongsFromArtist(artistId);
  }

  if (displayedSongs.length === 0) {
    return <p style={{ color: "white", marginLeft: "35px" }}>Nessuna canzone da mostrare</p>;
  }

  return (
    <section style={{ marginLeft: "35px", marginBottom: "30px" }}>
      {title && <h2>{title}</h2>}
      <div className="squared-cards-container">
        {displayedSongs.map(song => (
          <SquaredCard
            key={song.id}
            image={song.image}
            title={song.title}
            artist={song.artist}
            onClick={() => setCurrentSong(song)}
          />
        ))}
      </div>
    </section>
  );
};

export default SongsListView;