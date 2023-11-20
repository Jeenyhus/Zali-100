import React from 'react';
import '../style/Number1Song.css';
import Music from '../data/Music';

const Number1Song = () => {
   // first song is the top-ranking one
  const topSong = Music[0];

  return (
    <div className="card mb-4">
      {/* Artist's actual song cover image and get music data from the first song in the data/music component */}
      <img src={topSong.coverArt} className="card-img-top" alt={`Cover for ${topSong.title}`} />
      <div className="card-body">
        <h1 className="Rank">{topSong.Rank}</h1>
        <h5 className="card-title">{topSong.title}</h5>
        <small>{topSong.artist}</small>
      </div>
    </div>
  );
};

export default Number1Song;
