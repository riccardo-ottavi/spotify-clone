import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";
import { useState, useEffect } from "react";
import TableView from "../components/TableView";
import type { Song } from "../types/types";
import { useParams } from "react-router-dom";
import DetailButtons from "../components/DetailButtons";
import EditPlaylistModal from "../components/EditPlaylistModal";

export default function EditPlaylistPage() {
  const {
    playlists,
    addSongToPlaylist,
    songs,
    albums,
    getSongsFromPlaylist,
  } = useAudioPlayerContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>([]);

  const { id } = useParams<{ id: string }>();
  const playlistId = Number(id);

  const playlist = playlists.find(p => p.id === playlistId);

  // 🔥 FETCH CORRETTO
  useEffect(() => {
    if (!playlistId) return;

    const fetchSongs = async () => {
      try {
        const fetchedSongs = await getSongsFromPlaylist(playlistId);
        setPlaylistSongs(fetchedSongs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSongs();
  }, [playlistId, getSongsFromPlaylist]);

  // 🔥 USO playlistSongs invece di playlist.songIds
  const availableSongs = songs.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !playlistSongs.some(ps => ps.id === s.id)
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
        <img
          src={playlist?.image || "/images/default-playlist.png"}
          alt=""
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        />

        <div className="text-infos">
          <span>Playlist</span>
          <h2 onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
            {playlist?.name}
          </h2>
        </div>
      </div>

      <DetailButtons songs={playlistSongs} />
      <hr />

      <div className="container-page">
        {playlistSongs.length === 0 ? (
          <h3>Cerchiamo qualcosa per la tua playlist</h3>
        ) : (
          <TableView songs={playlistSongs} />
        )}

        <input
          placeholder="Cerca brani da aggiungere"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="playlist-inner-input"
        />

        <div className="search-results-playlist">
          {searchQuery ? (
            availableSongs.length > 0 ? (
              availableSongs.map(song => {
                const album = albums.find(a => a.id === song.albumId);

                return (
                  <div
                    key={song.id}
                    className="playlist-page-result-card"
                    onClick={async () => {
                      try {
                        await addSongToPlaylist(playlistId, song.id);

                        // 🔥 aggiorno subito lo stato locale
                        setPlaylistSongs(prev => [...prev, song]);

                        setSearchQuery("");
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <div className="playlist-page-result-card-cover">
                      <img
                        src={song.image || "/images/default-song.png"}
                        alt={song.title}
                      />

                      <div className="playlist-page-result-card-text">
                        <h5 className="underline">{song.title}</h5>
                        <span className="underline gray-text">
                          {album?.title || "Album sconosciuto"}
                        </span>
                      </div>
                    </div>

                    <span>{album?.title}</span>
                    <div className="add-to-playlist">Aggiungi</div>
                  </div>
                );
              })
            ) : (
              <p>Nessun brano trovato</p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}