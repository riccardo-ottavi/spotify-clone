import type { Song, Album, Artist, Playlist } from "./types/types";

export const songs: Song[] = [
    { id: 1, title: "AC 2", image: "../stranger.jpeg",  audio: "../audios/ac2_Master.wav", artistId: 1, albumId: 1 }, 
    { id: 2, title: "Afro", image: "../youg.jpeg", audio: "../audios/afro_Master.wav" , artistId: 1, albumId: 1},
    { id: 3, title: "My band", image: "../aquietplace.jpeg", audio: "../audios/band_Master.wav" , artistId: 1, albumId: 1},
    { id: 4, title: "Blessato", image: "../metal_lifting.jpg",  audio: "../audios/blessed_Master.wav" , artistId: 1, albumId: 1},
    { id: 5, title: "Come in un film", image: "../mixdaily.jpeg", audio: "../audios/film_Master.wav" , artistId: 1, albumId: 2},
    { id: 6, title: "Sempre e solo un combattente", image: "../split.jpeg",  audio: "../audios/fighter_Master.wav", artistId: 1, albumId: 2 },
    { id: 7, title: "Flautista", image: "../stranger.jpeg", audio: "../audios/flutist_Master.wav" , artistId: 1, albumId: 2}, 
    { id: 8, title: "Assolo", image: "../youg.jpeg", audio: "../audios/guitarist_Master.wav" , artistId: 1, albumId: 2},
    { id: 9, title: "Direzione: Malibù", image: "../aquietplace.jpeg", audio: "../audios/malibu_Master.wav" , artistId: 1, albumId: 3},
    { id: 10, title: "Path toward exilation", image: "../metal_lifting.jpg", audio: "../audios/manor-solo-beat.wav" , artistId: 1, albumId: 3},
    { id: 11, title: "Like a saxophone", image: "../mixdaily.jpeg",  audio: "../audios/saxist_Master.wav" , artistId: 1, albumId: 3},
    { id: 12, title: "Secret files", image: "../split.jpeg", audio: "../audios/spaceShip_Master.wav" , artistId: 1, albumId: 3},
    { id: 13, title: "AC 2", image: "../spoti.svg",  audio: "../audios/ac2_Master.wav", artistId: 1, albumId: 1 }, 
    { id: 14, title: "Afro", image: "../youg.jpeg", audio: "../audios/afro_Master.wav" , artistId: 1, albumId: 1},
    { id: 15, title: "My band", image: "../aquietplace.jpeg", audio: "../audios/band_Master.wav" , artistId: 1, albumId: 1},
    { id: 16, title: "Blessato", image: "../metal_lifting.jpg",  audio: "../audios/blessed_Master.wav" , artistId: 1, albumId: 1},
    { id: 17, title: "Come in un film", image: "../mixdaily.jpeg", audio: "../audios/film_Master.wav" , artistId: 1, albumId: 2},
    { id: 18, title: "Sempre e solo un combattente", image: "../split.jpeg",  audio: "../audios/fighter_Master.wav", artistId: 1, albumId: 2 },
    { id: 19, title: "Flautista", image: "../stranger.jpeg", audio: "../audios/flutist_Master.wav" , artistId: 1, albumId: 2}, 
    { id: 20, title: "Assolo", image: "../youg.jpeg", audio: "../audios/guitarist_Master.wav" , artistId: 1, albumId: 2},
    { id: 21, title: "Pogo", image: "../aquietplace.jpeg", audio: "../audios/pogo_Master.wav" , artistId: 1, albumId: 3},
    { id: 22, title: "No Vibe Killing", image: "../metal_lifting.jpg", audio: "../audios/pluckist_Master.wav" , artistId: 1, albumId: 3},
    { id: 23, title: "Molto Meglio", image: "../mixdaily.jpeg",  audio: "../audios/pinzatrice_Master.wav" , artistId: 1, albumId: 3},
    { id: 24, title: "Pianista Sull'Adriatico", image: "../split.jpeg", audio: "../audios/pianist_Master.wav" , artistId: 1, albumId: 3},
    { id: 25, title: "Opera", image: "../spoti.svg", audio: "../audios/opera_Master.wav" , artistId: 1, albumId: 3},
    { id: 26, title: "Drive By", image: "../metal_lifting.jpg", audio: "../audios/duro_Master.wav" , artistId: 1, albumId: 3},
    { id: 27, title: "Polleggiamo?", image: "../mixdaily.jpeg",  audio: "../audios/chill_Master.wav" , artistId: 1, albumId: 3},
    { id: 28, title: "Percussionismo", image: "../split.jpeg", audio: "../audios/bongist_Master.wav" , artistId: 1, albumId: 3},
  ];

  export const albums: Album[] = [
    {id: 1, title: "Trap fever", artistId: 1, year: 2026, image: "../youg.jpeg", songIds: [2,6,3,10,13,17,19,22,25,28]},
    {id: 2, title: "Hip-Hop fever", artistId: 1, year: 2025, image: "../aquietplace.jpeg", songIds: [5,1,7,8,15,18,21,24,27]},
    {id: 3, title: "House fever", artistId: 1, year: 2024, image: "../mixdaily.jpeg", songIds: [9,11,4,12,14,16,20,23,26]},
  ]

  export const artists: Artist[] = [
    {id: 1, name: "Sfaso", bio:"Nato a New York nel 2034, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta repellat hic rem libero tenetur iure culpa blanditiis, dolores rerum reprehenderit fugiat. Quisquam sed recusandae accusantium magnam soluta debitis dignissimos!", image: "../propic.jpg"}
  ]

  export const playlists: Playlist[] = [
  {
    id: 1,
    name: "Preferiti",
    image: "../mixdaily.jpeg",
    songIds: [1, 3, 5]
  },
  {
    id: 2,
    name: "Workout",
    image: "../split.jpeg",
    songIds: [2, 4, 6]
  }
];