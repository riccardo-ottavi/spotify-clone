import { useState, useRef, useEffect } from 'react';
import type { Song } from '../types/types';
import { artists, playlists, albums } from '../data';

export function useAudioPlayer() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [queue, setQueue] = useState<Song[]>([]);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState<'none' | 'one' | 'all'>('none');
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then(res => res.json())
      .then(data => setSongs(data))
      .catch(err => console.error(err));
  }, []);

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
      audioRef.current.src = `http://localhost:3000${currentSong.audio}`;
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

    // repeat 'one'
    if (repeat === 'one') {
      audioRef.current?.play();
      return;
    }

    let nextIndex;
    if (shuffle) {
      // scegli un brano a caso tranne quello corrente
      const indices = queue.map((_, i) => i).filter(i => i !== currentIndex);
      nextIndex = indices[Math.floor(Math.random() * indices.length)];
    } else {
      nextIndex = (currentIndex + 1) % queue.length;
    }

    // repeat 'all' o normale avanzamento
    if (nextIndex === 0 && repeat === 'none' && !shuffle && currentIndex === queue.length - 1) {
      // fine della coda senza repeat → ferma il player
      setIsPlaying(false);
      return;
    }

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

    let prevIndex;
    if (shuffle) {
      const indices = queue.map((_, i) => i).filter(i => i !== currentIndex);
      prevIndex = indices[Math.floor(Math.random() * indices.length)];
    } else {
      prevIndex = currentIndex === 0 ? queue.length - 1 : currentIndex - 1;
    }

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

  const toggleRepeat = () => {
    setRepeat(prev => {
      if (prev === "none") return "all";
      if (prev === "all") return "one";
      return "none";
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
    formatTime,
    shuffle,
    setShuffle,
    repeat,
    setRepeat,
    toggleRepeat
  };
}