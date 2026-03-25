import { useState, useRef, useEffect } from 'react';
import type { Song } from '../types/types';

export function useAudioPlayer() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

 const songs = [
    { id: 1, title: "Stay with me", image: "../stranger.jpeg", artist: "Non ricordo", audio: "../fah.mp3" },
    { id: 2, title: "Flyday Chinatown", image: "../youg.jpeg", artist: "Non ricordo 2", audio: "../fah.mp3" },
    { id: 3, title: "Where is my mind", image: "../aquietplace.jpeg", artist: "Pixies", audio: "../fah.mp3" },
    { id: 4, title: "Make money like bettino", image: "../metal_lifting.jpg", artist: "Gionni Gioielli", audio: "../fah.mp3" },
    { id: 5, title: "Stay with me", image: "../mixdaily.jpeg", artist: "Non ricordo", audio: "../fah.mp3" },
    { id: 6, title: "Flyday Chinatown", image: "../split.jpeg", artist: "Non ricordo 2", audio: "../fah.mp3" },
  ];


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

  return {
    currentSong,
    setCurrentSong,
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    progress,
    audioRef,
    songs
  };
}