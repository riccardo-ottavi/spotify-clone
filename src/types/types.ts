export type Song = {
  audio: string;
  id: number;
  title: string;
  image: string;  
  artistId: number;    
  albumId: number;   
  duration: string;
};

  export type FooterProps = {
  progress: number;
  togglePlay: () => void;
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  volume: number;
  setVolume: (value: number) => void;
  currentSong: Song | null;
  artistName: string;
};

export type Artist = {
  id: number;
  name: string;
  bio?: string;
  image: string;
};

export type Album = {
  id: number;
  title: string;
  artistId: number;     
  year: number;
  image: string;
  songIds: number[];
};

export type CollectionViewProps = {
  type: "artist" | "album" | "playlist";
  artistId?: number;
  albumId?: number;
  playlistId?: number;
  bio?: string;
  albumSongs?: Song[];
  title: string;
  year?: number
  image: string
}

export type DetailHeaderProps = {
  type: "artist" | "album" | "playlist";
  title?: string;
  bio?: string;
  year?: number;
  image: string
};

export type AudioContextType = {
  currentSong: Song | null;
  setCurrentSong: (song: Song) => void;
  isPlaying: boolean;
  togglePlay: () => void;
  volume: number;
  setVolume: (v: number) => void;
  progress: number;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  songs: Song[];
  albums: Album[];
  artists: Artist[];
  getSongsFromArtist: (id: number) => Song[]; 
  getSongsFromAlbum: (id: number) => Song[]; 
  getSongsFromPlaylist: (id: number) => Song[];
  playlists: Playlist[]; 
  playQueue: (song: Song[], index: number) => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  queue: Song[];
  getAudioDuration: (src: string) => Promise<number>;
  formatTime: (seconds: number | undefined) => string
  shuffle: boolean;
  setShuffle: (val: boolean) => void;
  repeat: 'none' | 'one' | 'all';
  setRepeat: (val: 'none' | 'one' | 'all') => void;
  toggleRepeat: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Song[];
  addSongToPlaylist: (playlistId: number, songId: number) => void
  createPlaylist: () => Playlist; 
  updatePlaylist: (id: number, data: Partial<Playlist>) => Playlist;
  deletePlaylist: (playlistId: number) => void;
};

export type Playlist = {
  id: number;
  name: string;
  image: string;
  songIds: number[];
  notes: string
};