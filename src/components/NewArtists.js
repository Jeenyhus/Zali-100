import React from 'react';
import "../style/NewArtists.css"

const NewArtists = () => {
  return (
    <div className="number1song-stats-container">
      <div className="number1song-stats-item">
        <a href="/stats">Stats</a>
      </div>
      <div className="number1song-stats-item">
        <h3 className='rank'>6</h3>
        <span>Rank</span>
      </div>
      <div className="number1song-stats-item">
        <a href="/news">News</a>
      </div>
      <div className="number1song-stats-item">
        <h2>11</h2>
        <small>Weeks</small>
      </div>
      <div className="number1song-stats-item">
        <a href="/share">Share</a>
      </div>
    </div>
  );
};

export default NewArtists;
