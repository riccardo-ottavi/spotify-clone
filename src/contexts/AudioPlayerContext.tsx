import { createContext, useContext, type ReactNode } from "react";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import type { Album, Artist, Song } from "../types/types";

type AudioContextType = {
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
};

const AudioPlayerContext = createContext<AudioContextType | null>(null);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audio = useAudioPlayer();

  return (
    <AudioPlayerContext.Provider value={audio}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayerContext() {
  const context = useContext(AudioPlayerContext);
  if (!context) throw new Error("useAudioPlayerContext must be used inside AudioPlayerProvider");
  return context;
}