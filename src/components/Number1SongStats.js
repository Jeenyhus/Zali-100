import React from 'react';
import '../style/Number1SongStats.css';

const Number1SongStats = () => {
  return (
    <div className="number1song-stats-container">
      <div className="number1song-stats-item">
        <a href="/stats">Stats</a>
      </div>
      <div className="number1song-stats-item">
        <h3 className='rank'>1</h3>
        <span>Rank</span>
      </div>
      <div className="number1song-stats-item">
        <a href="/news">News</a>
      </div>
      <div className="number1song-stats-item">
        <h2>6</h2>
        <small>Months</small>
      </div>
      <div className="number1song-stats-item">
        <a href="/share">Share</a>
      </div>
    </div>
  );
};

export default Number1SongStats;
