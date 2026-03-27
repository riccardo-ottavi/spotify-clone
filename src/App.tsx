import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import { AudioPlayerProvider } from "./contexts/AudioPlayerContext";
import './App.css'
import AlbumPage from "./pages/AlbumPage";
import PlaylistPage from "./pages/PlaylistPage";
import ArtistPage from "./pages/ArtistPage";

function App() {
  return (
    <AudioPlayerProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* HOME */}
        <Route index element={<HomePage />} />

        {/* ALBUM */}
        <Route path="album/:id" element={<AlbumPage />} />

        {/* PLAYLIST */}
        <Route path="playlist/:id" element={<PlaylistPage />} />

        {/* ARTIST */}
        <Route path="artist/:id" element={<ArtistPage artistId={0} />} />

      </Route>
    </Routes>
  </BrowserRouter>
</AudioPlayerProvider>
  );
}

export default App;