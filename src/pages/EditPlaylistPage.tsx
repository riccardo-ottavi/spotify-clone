import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { useState } from "react";
import TableView from "../components/TableView";
import type { Song } from "../types/types";
import { useParams } from "react-router-dom";
import DetailButtons from "../components/DetailButtons";
import EditPlaylistModal from "../components/EditPlaylistModal"

export default function EditPlaylistPage() {

    const { playlists, addSongToPlaylist, songs } = useAudioPlayerContext();
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams<{ id: string }>();

    const playlistId = Number(id);
    const playlist = playlists.find(p => p.id === playlistId);
    const playlistSongs = playlist?.songIds
        .map(id => songs.find(s => s.id === id))
        .filter(Boolean) as Song[];
    const availableSongs = songs.filter(s =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {isModalOpen && playlist && (
                <EditPlaylistModal
                    playlistId={playlist.id}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
            <div className="detail-header-album album">
                <img src={playlist?.image}
                    alt=""
                    onClick={() => setIsModalOpen(true)}
                    style={{ cursor: "pointer" }}
                />
                <div className="text-infos">
                    <span>Playlist</span>
                    <h2
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsModalOpen(true)}
                    >{playlist?.name}</h2>
                </div>

            </div>
            <DetailButtons
                songs={playlistSongs}
            />

            {playlistSongs.length === 0 ? (
                <p>Questa playlist è vuota</p>
            ) : (
                <TableView songs={playlistSongs} />
            )}

            <input
                placeholder="Cerca brani da aggiungere"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-results-playlist">
                {searchQuery && availableSongs.length > 0 ? (
                    availableSongs.map(song => (
                        <div
                            key={song.id}
                            className="playlist-page-result-card"
                            onClick={() => addSongToPlaylist(playlistId, song.id)}
                        >
                            <div className="playlist-page-result-card-cover">
                                <img src={song.image} alt={song.title} />
                                <div className="playlist-page-result-card-text">
                                    <h5>{song.title}</h5>
                                    <span>Sfaso</span>
                                </div>
                            </div>

                            <span>Nome album</span>
                            <button>Aggiungi</button>
                        </div>
                    ))
                ) : searchQuery ? (
                    <p>Nessun brano trovato</p>
                ) : null}
            </div>
        </div>
    );
}
