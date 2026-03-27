import { useState, useRef, useEffect } from 'react';
import type { Playlist, Song } from '../types/types';

export function useAudioPlayer() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

 const songs = [
    { id: 1, title: "AC 2", image: "../stranger.jpeg", artist: "Sfaso", audio: "../audios/ac2_Master.wav" }, 
    { id: 2, title: "Afro", image: "../youg.jpeg", artist: "Sfaso", audio: "../audios/afro_Master.wav" },
    { id: 3, title: "My band", image: "../aquietplace.jpeg", artist: "Sfaso", audio: "../audios/band_Master.wav" },
    { id: 4, title: "Blessato", image: "../metal_lifting.jpg", artist: "Sfaso", audio: "../audios/blessed_Master.wav" },
    { id: 5, title: "Come in un film", image: "../mixdaily.jpeg", artist: "Sfaso", audio: "../audios/film_Master.wav" },
    { id: 6, title: "Sempre e solo un combattente", image: "../split.jpeg", artist: "Sfaso", audio: "../audios/fighter_Master.wav" },
    { id: 7, title: "Flautista", image: "../stranger.jpeg", artist: "Sfaso", audio: "../audios/flutist_Master.wav" }, 
    { id: 8, title: "Assolo", image: "../youg.jpeg", artist: "Sfaso", audio: "../audios/guitarist_Master.wav" },
    { id: 9, title: "Direzione: Malibù", image: "../aquietplace.jpeg", artist: "Sfaso", audio: "../audios/malibu_Master.wav" },
    { id: 10, title: "Path toward exilation", image: "../metal_lifting.jpg", artist: "Sfaso", audio: "../audios/manor-solo-beat_Master.wav" },
    { id: 11, title: "Like a saxophone", image: "../mixdaily.jpeg", artist: "Sfaso", audio: "../audios/saxist_Master.wav" },
    { id: 12, title: "Secret files", image: "../split.jpeg", artist: "Sfaso", audio: "../audios/spaceShip_Master.wav" },
  ];

  const albums = [
    {id: 1, title: "Trap fever", artistId: 1, year: 2026, image: "../stranger.jpeg", songIds: [1,4,6]}
  ]

  const artists = [
    {id: 1, name: "Sfaso", bio:"Nato a New York nel 2034", image: "../aquietplace.jpeg"}
  ]

  const playlists: Playlist[] = [
  {
    id: 1,
    name: "Preferiti",
    image: "../mixdaily.jpeg",
    songIds: [1, 3, 5]
  },
  {
    id: 2,
    name: "Workout",
    image: "../split.jpeg",
    songIds: [2, 4, 6]
  }
];

  useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  const handleSongEnd = () => {
    playNextSong();
  };

  audio.addEventListener("ended", handleSongEnd);
  return () => audio.removeEventListener("ended", handleSongEnd);
}, [currentSong]);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.audio;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => setProgress((audio.currentTime / audio.duration) * 100);

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const getSongsFromAlbum = (albumId: number) => {
  const album = albums.find(a => a.id === albumId);
  if (!album) return [];
  return album.songIds
    .map(id => songs.find(s => s.id === id))
    .filter(Boolean) as Song[]; 
};

const getSongsFromArtist = (artistId: number): Song[] => {
  return songs.filter(song => {
    const artist = artists.find(a => a.id === artistId);
    return artist && song.artist === artist.name;
  });
};

const playNextSong = () => {
  if (!currentSong) return;

  const currentIndex = songs.findIndex(s => s.id === currentSong.id);
  if (currentIndex === -1) return;

  const nextIndex = (currentIndex + 1) % songs.length;

  setCurrentSong(songs[nextIndex]);
};

const playPreviousSong = () => {
  if (!currentSong) return;

  const currentIndex = songs.findIndex(s => s.id === currentSong.id);
  if (currentIndex === -1) return;

  const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
  setCurrentSong(songs[prevIndex]);
};

  return {
    currentSong,
    setCurrentSong,
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    progress,
    audioRef,
    songs,
    artists,
    albums,
    getSongsFromAlbum,
    getSongsFromArtist,
    playlists
  };
}