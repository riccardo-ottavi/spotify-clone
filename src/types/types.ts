 export type Song = {
    audio: string;
    id: number;
    title: string;
    image: string;
    artist: string;
  }

  export type FooterProps = {
  progress: number;
  togglePlay: () => void;
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  volume: number;
  setVolume: (value: number) => void;
  currentSong: Song | null;
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
  year?: number;
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
}

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
};

export type Playlist = {
  id: number;
  name: string;
  image: string;
  songIds: number[];
};