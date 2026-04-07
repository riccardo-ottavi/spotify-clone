import { useState } from "react";
import { useAudioPlayerContext } from "../contexts/AudioPlayerContext";

type Props = {
  playlistId: number;
  onClose: () => void;
};

export default function EditPlaylistModal({ playlistId, onClose }: Props) {
  const { playlists, updatePlaylist } = useAudioPlayerContext();
  const playlist = playlists.find(p => p.id === playlistId);

  const [title, setTitle] = useState(playlist?.name || "");
  const [description, setDescription] = useState(playlist?.notes || "");
  const [image, setImage] = useState(playlist?.image || "");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

 
    const preview = URL.createObjectURL(selectedFile);
    setImagePreview(preview);
 
    const formData = new FormData();
    formData.append("image", selectedFile);  

    try {
      const res = await fetch("http://localhost:3000/upload/image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

 
      setImage(data.url);
    } catch (err) {
      console.error(err);
    }
  }

  if (!playlist) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modifica dettagli</h2>

        <div className="image-section">
          <img
            src={imagePreview || image || '/images/default-playlist.png'}
            alt="Playlist"
            className="playlist-preview"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
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
          <button
            onClick={() => {
              updatePlaylist(playlist.id, {
                name: title,
                notes: description,
                image: image
              });
              onClose();
            }}
          >
            Salva
          </button>
        </div>
      </div>

    </div>
  );
}