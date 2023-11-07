// src/data/zambianSongs.js

const zambianSongs = [
    {
      id: 1,
      title: "Try Again",
      artist: "Yo Maps",
      coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8b/dc/46/8bdc4671-6ba1-65f8-68c2-316f84e12991/0757572946914.png/296x296bb.webp",
      releaseDate: "2023-03-31",
      streamingCount: Math.floor(Math.random() * 1500000) + 500000,
      genre: "Pop",
      platforms: {
        spotify: "https://open.spotify.com/track/0CZCuACIMPBCqZkhF24YZw?si=85b82bedf5ff450f",
        appleMusic: "https://music.apple.com/na/album/try-again-feat-abel-chungu-musuka/1685171339?i=1685171341",
      },
    },
    {
      id: 3,
      title: "Lit Manana",
      artist: "Towela Kaira",
      coverArt: "https://source.boomplaymusic.com/group10/M00/12/16/356faa7aa8d340bdb0b3812ab07f65cc_464_464.jpg",
      releaseDate: "2023-04-18",
      streamingCount: Math.floor(Math.random() * 1300000) + 500000,
      genre: "Afro beat",
      platforms: {
        spotify: "https://open.spotify.com/track/4sEM5ZygpZm5QmW21ZIf2v?si=de4f17aedb6b47d0",
        appleMusic: "https://music.apple.com/na/album/manana-feat-jemax/1598960911?i=1598960912",
      },
    },
    {
      id: 4,
      title: "Mutima",
      artist: "Tio Nason",
      coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/35/78/9f35789d-cdd2-f7b5-5067-bf3500257c13/artwork.jpg/296x296bb.webp",
      releaseDate: "2023-09-02",
      streamingCount: Math.floor(Math.random() * 1400000) + 500000,
      genre: "R&B",
      platforms: {
        spotify: "https://ope;n.spotify.com/track/10zAF98r0XRyp618rrLU98?si=a9675f2382754415",
        appleMusic: "https://music.apple.com/na/album/mutima/1700462966?i=1700462967",
      },
    },
];

export default zambianSongs;