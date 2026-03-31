import type { Song } from "../types/types"
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext"
import { useState, useEffect } from "react";
import React from "react"

type Props = {
    songs: Song[],
    onClick?: () => void;
}

const TableView = React.memo(({ songs }: Props) => {
    const { currentSong, playQueue, } = useAudioPlayerContext();

    return (
        <div className="detail-cards-container">
            {songs.map((s, index) => {
                const isActive = currentSong?.id === s.id;

                return (
                    <div
                        key={s.id}
                        className={`detail-song-card ${isActive ? "active" : ""}`}
                        onClick={() => playQueue(songs, index)}
                    >
                        <div className="play-or-id">
                            <img className="detail-play" src="../play-solid-full-white.svg" alt="" />
                            <span className="detail-id">{index + 1}</span>
                        </div>

                        <img src={s.image} alt={s.title} />

                        <span className={isActive ? "active-text underline" : "underline"}>
                            {s.title}
                        </span>
                        <span className="absolute-right">
                            {s.duration}
                        </span>
                    </div>
                );
            })}
        </div>
    );
});

export default TableView