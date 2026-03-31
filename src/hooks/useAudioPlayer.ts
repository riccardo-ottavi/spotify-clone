import { useState, useRef, useEffect } from 'react';
import type { Playlist, Song } from '../types/types';

export function useAudioPlayer() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [queue, setQueue] = useState<Song[]>([]);

 const songs = [
    { id: 1, title: "AC 2", image: "../stranger.jpeg",  audio: "../audios/ac2_Master.wav", artistId: 1, albumId: 1 }, 
    { id: 2, title: "Afro", image: "../youg.jpeg", audio: "../audios/afro_Master.wav" , artistId: 1, albumId: 1},
    { id: 3, title: "My band", image: "../aquietplace.jpeg", audio: "../audios/band_Master.wav" , artistId: 1, albumId: 1},
    { id: 4, title: "Blessato", image: "../metal_lifting.jpg",  audio: "../audios/blessed_Master.wav" , artistId: 1, albumId: 1},
    { id: 5, title: "Come in un film", image: "../mixdaily.jpeg", audio: "../audios/film_Master.wav" , artistId: 1, albumId: 2},
    { id: 6, title: "Sempre e solo un combattente", image: "../split.jpeg",  audio: "../audios/fighter_Master.wav", artistId: 1, albumId: 2 },
    { id: 7, title: "Flautista", image: "../stranger.jpeg", audio: "../audios/flutist_Master.wav" , artistId: 1, albumId: 2}, 
    { id: 8, title: "Assolo", image: "../youg.jpeg", audio: "../audios/guitarist_Master.wav" , artistId: 1, albumId: 2},
    { id: 9, title: "Direzione: Malibù", image: "../aquietplace.jpeg", audio: "../audios/malibu_Master.wav" , artistId: 1, albumId: 3},
    { id: 10, title: "Path toward exilation", image: "../metal_lifting.jpg", audio: "../audios/manor-solo-beat.wav" , artistId: 1, albumId: 3},
    { id: 11, title: "Like a saxophone", image: "../mixdaily.jpeg",  audio: "../audios/saxist_Master.wav" , artistId: 1, albumId: 3},
    { id: 12, title: "Secret files", image: "../split.jpeg", audio: "../audios/spaceShip_Master.wav" , artistId: 1, albumId: 3},
    { id: 13, title: "AC 2", image: "../spoti.svg",  audio: "../audios/ac2_Master.wav", artistId: 1, albumId: 1 }, 
    { id: 14, title: "Afro", image: "../youg.jpeg", audio: "../audios/afro_Master.wav" , artistId: 1, albumId: 1},
    { id: 15, title: "My band", image: "../aquietplace.jpeg", audio: "../audios/band_Master.wav" , artistId: 1, albumId: 1},
    { id: 16, title: "Blessato", image: "../metal_lifting.jpg",  audio: "../audios/blessed_Master.wav" , artistId: 1, albumId: 1},
    { id: 17, title: "Come in un film", image: "../mixdaily.jpeg", audio: "../audios/film_Master.wav" , artistId: 1, albumId: 2},
    { id: 18, title: "Sempre e solo un combattente", image: "../split.jpeg",  audio: "../audios/fighter_Master.wav", artistId: 1, albumId: 2 },
    { id: 19, title: "Flautista", image: "../stranger.jpeg", audio: "../audios/flutist_Master.wav" , artistId: 1, albumId: 2}, 
    { id: 20, title: "Assolo", image: "../youg.jpeg", audio: "../audios/guitarist_Master.wav" , artistId: 1, albumId: 2},
    { id: 21, title: "Pogo", image: "../aquietplace.jpeg", audio: "../audios/pogo_Master.wav" , artistId: 1, albumId: 3},
    { id: 22, title: "No Vibe Killing", image: "../metal_lifting.jpg", audio: "../audios/pluckist_Master.wav" , artistId: 1, albumId: 3},
    { id: 23, title: "Molto Meglio", image: "../mixdaily.jpeg",  audio: "../audios/pinzatrice_Master.wav" , artistId: 1, albumId: 3},
    { id: 24, title: "Pianista Sull'Adriatico", image: "../split.jpeg", audio: "../audios/pianist_Master.wav" , artistId: 1, albumId: 3},
    { id: 25, title: "Opera", image: "../spoti.svg", audio: "../audios/opera_Master.wav" , artistId: 1, albumId: 3},
    { id: 26, title: "Drive By", image: "../metal_lifting.jpg", audio: "../audios/duro_Master.wav" , artistId: 1, albumId: 3},
    { id: 27, title: "Polleggiamo?", image: "../mixdaily.jpeg",  audio: "../audios/chill_Master.wav" , artistId: 1, albumId: 3},
    { id: 28, title: "Percussionismo", image: "../split.jpeg", audio: "../audios/bongist_Master.wav" , artistId: 1, albumId: 3},
  ];

  const albums = [
    {id: 1, title: "Trap fever", artistId: 1, year: 2026, image: "../youg.jpeg", songIds: [2,6,3,10,13,17,19,22,25,28]},
    {id: 2, title: "Hip-Hop fever", artistId: 1, year: 2025, image: "../aquietplace.jpeg", songIds: [5,1,7,8,15,18,21,24,27]},
    {id: 3, title: "House fever", artistId: 1, year: 2024, image: "../mixdaily.jpeg", songIds: [9,11,4,12,14,16,20,23,26]},
  ]

  const artists = [
    {id: 1, name: "Sfaso", bio:"Nato a New York nel 2034, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta repellat hic rem libero tenetur iure culpa blanditiis, dolores rerum reprehenderit fugiat. Quisquam sed recusandae accusantium magnam soluta debitis dignissimos!", image: "../propic.jpg"}
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

  const handleEnded = () => {
    playNextSong();
  };

  audio.addEventListener("ended", handleEnded);
  return () => audio.removeEventListener("ended", handleEnded);
}, [currentSong, queue]);

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
    return artist && song.artistId === artistId;
  });
};

const playNextSong = () => {
  if (!currentSong || queue.length === 0) return;

  const currentIndex = queue.findIndex(s => s.id === currentSong.id);
  if (currentIndex === -1) return;

  const nextIndex = (currentIndex + 1) % queue.length;

  setCurrentSong(queue[nextIndex]);
};

const getSongsFromPlaylist = (id: number) => {
    const playlist = playlists.find(p => p.id === id);
    return playlist ? playlist.songIds.map(sid => songs.find(s => s.id === sid)).filter(Boolean) as Song[] : [];
  };

const playPreviousSong = () => {
  if (!currentSong || queue.length === 0) return;

  const currentIndex = queue.findIndex(s => s.id === currentSong.id);
  if (currentIndex === -1) return;

  const prevIndex =
    currentIndex === 0 ? queue.length - 1 : currentIndex - 1;

  setCurrentSong(queue[prevIndex]);
};

const playQueue = (songs: Song[], startIndex: number = 0) => {
  setQueue(songs);
  setCurrentSong(songs[startIndex]);
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
    getSongsFromPlaylist,
    playlists,
    playQueue,
    playNextSong,
    playPreviousSong
  };
}