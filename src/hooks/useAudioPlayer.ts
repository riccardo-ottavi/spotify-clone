import { useState, useRef, useEffect } from 'react';
import type { Song } from '../types/types';
import { songs, artists, playlists, albums } from '../data';

export function useAudioPlayer() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [queue, setQueue] = useState<Song[]>([]);

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

function formatTime(seconds: number | undefined) {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

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

const getAudioDuration = (src: string): Promise<number> => {
  return new Promise((resolve) => {
    const audio = new Audio(src);

    audio.addEventListener("loadedmetadata", () => {
      resolve(audio.duration);
    });
  });
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
    playPreviousSong,
    queue,
    getAudioDuration,
    formatTime
  };
}