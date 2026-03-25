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
};