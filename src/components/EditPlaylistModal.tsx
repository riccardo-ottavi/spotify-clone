import { useState } from "react";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

type Props = {
  playlistId: number;
  onClose: () => void;
};

export default function EditPlaylistModal({ playlistId, onClose }: Props) {
  const { playlists } = useAudioPlayerContext();
  const playlist = playlists.find(p => p.id === playlistId);

  const [title, setTitle] = useState(playlist?.name || "");
  const [description, setDescription] = useState(playlist?.notes || "");
  const [image, setImage] = useState(playlist?.image || "");

  if (!playlist) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modifica dettagli</h2>
        
        <div className="image-section">
          <img src={image} alt="Playlist" className="playlist-preview" />
        </div>

        <div className="field">
          <label>Nome</label>
          <input
            type="text"
            value={title}
            maxLength={100}
            onChange={e => setTitle(e.target.value)}
          />
          <span>{title.length}/100</span>
        </div>

        <div className="field">
          <label>Descrizione</label>
          <textarea
            value={description}
            maxLength={300}
            onChange={e => setDescription(e.target.value)}
          />
          <span>{description.length}/300</span>
        </div>

        <div className="modal-actions">
          <button onClick={onClose}>Annulla</button>
          <button>Salva</button>
        </div>
      </div>
    </div>
  );
}