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

export type Playlist = {
  id: number;
  title: string;
  description?: string;
  image?: string;
  songIds: number[];
};