import { useState, useRef, useEffect } from 'react';
import type { Album, Artist, Playlist, Song } from '../types/types';

export function useAudioPlayer() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [queue, setQueue] = useState<Song[]>([]);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState<'none' | 'one' | 'all'>('none');
  const [songs, setSongs] = useState<Song[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fetchData = <T,>(endpoint: string, setState: (data: T) => void) => {
    fetch(`http://localhost:3000/${endpoint}`)
      .then(res => res.json())
      .then(data => setState(data))
      .catch(err => console.error(err));
  };

  useEffect(() => { fetchData<Song[]>('songs', setSongs); }, []);
  useEffect(() => { fetchData<Artist[]>('artists', setArtists); }, []);
  useEffect(() => { fetchData<Album[]>('albums', setAlbums); }, []);
  useEffect(() => { fetchData<Playlist[]>('playlists', setPlaylists); }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => playNextSong();
    const handleTimeUpdate = () => setProgress((audio.currentTime / audio.duration) * 100);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentSong, queue, shuffle, repeat]);

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
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = songs.filter(song =>
      song.title.toLowerCase().includes(query) ||
      artists.find(a => a.id === song.artistId)?.name.toLowerCase().includes(query) ||
      albums.find(al => al.id === song.albumId)?.title.toLowerCase().includes(query)
    );

    setSearchResults(results);
  }, [searchQuery, songs, artists, albums]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const playQueue = (songs: Song[], startIndex: number = 0) => {
    setQueue(songs);
    setCurrentSong(songs[startIndex]);
  };

  const playNextSong = () => {
    if (!currentSong || queue.length === 0) return;

    const currentIndex = queue.findIndex(s => s.id === currentSong.id);
    if (currentIndex === -1) return;

    if (repeat === 'one') {
      audioRef.current?.play();
      return;
    }

    let nextIndex: number;
    if (shuffle) {
      const indices = queue.map((_, i) => i).filter(i => i !== currentIndex);
      nextIndex = indices[Math.floor(Math.random() * indices.length)];
    } else {
      nextIndex = (currentIndex + 1) % queue.length;
    }

    if (nextIndex === 0 && repeat === 'none' && !shuffle && currentIndex === queue.length - 1) {
      setIsPlaying(false);
      return;
    }

    setCurrentSong(queue[nextIndex]);
  };

  const playPreviousSong = () => {
    if (!currentSong || queue.length === 0) return;

    const currentIndex = queue.findIndex(s => s.id === currentSong.id);
    if (currentIndex === -1) return;

    let prevIndex: number;
    if (shuffle) {
      const indices = queue.map((_, i) => i).filter(i => i !== currentIndex);
      prevIndex = indices[Math.floor(Math.random() * indices.length)];
    } else {
      prevIndex = currentIndex === 0 ? queue.length - 1 : currentIndex - 1;
    }

    setCurrentSong(queue[prevIndex]);
  };

  const toggleRepeat = () => setRepeat(prev => (prev === 'none' ? 'all' : prev === 'all' ? 'one' : 'none'));

  const formatTime = (seconds: number | undefined) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getSongsFromAlbum = (albumId: number) => {
    const album = albums.find(a => a.id === albumId);
    return album ? album.songIds.map(id => songs.find(s => s.id === id)).filter(Boolean) as Song[] : [];
  };

  const getSongsFromArtist = (artistId: number) => songs.filter(s => s.artistId === artistId);

  const getSongsFromPlaylist = (playlistId: number) => {
    const playlist = playlists.find(p => p.id === playlistId);
    return playlist ? playlist.songIds.map(sid => songs.find(s => s.id === sid)).filter(Boolean) as Song[] : [];
  };

  const getAudioDuration = (src: string): Promise<number> =>
    new Promise(resolve => {
      const audio = new Audio(src);
      audio.addEventListener('loadedmetadata', () => resolve(audio.duration));
    });


  const createPlaylist = () => {
    const newPlaylist: Playlist = {
      id: Date.now(),
      name: 'Nuova playlist',
      image: '/new-playlist.png',
      songIds: [],
      notes: ''
    };
    setPlaylists(prev => [...prev, newPlaylist]);
    return newPlaylist;
  };

  const addSongToPlaylist = (playlistId: number, songId: number) =>
    setPlaylists(prev => prev.map(p => p.id === playlistId ? { ...p, songIds: [...p.songIds, songId] } : p));

  const updatePlaylist = (id: number, data: Partial<Playlist>) =>
    setPlaylists(prev => prev.map(p => (p.id === id ? { ...p, ...data } : p)));

  const deletePlaylist = (playlistId: number) => {
  setPlaylists(prev => prev.filter(p => p.id !== playlistId));

  if (queue.some(song => {
    const playlist = playlists.find(p => p.songIds.includes(song.id));
    return playlist?.id === playlistId;
  })) {
    setQueue([]);         
    setCurrentSong(null);  
    setIsPlaying(false);
  }
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
    toggleRepeat,
    searchQuery,
    setSearchQuery,
    searchResults,
    addSongToPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist
  };
}