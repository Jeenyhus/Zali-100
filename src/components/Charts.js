import React from 'react';
import '../style/Charts.css';
import Music from '../data/Music';

const Charts = () => {
  return (
    <div className='music'>
      <h2>Top 10 Music</h2>
      <ul>
        {Music.map((song) => (
          <li key={song.id}>
            <div className="arrow-container">
              <img src={song.coverArt} alt={`Cover for ${song.title}`} style={{ width: '50px', height: '50px' }} />
              <div className={`arrow-${song.movement}`}>{song.movement === 'up' ? '↑' : '↓'}</div>
              <div className="rank-container">{song.Rank}</div>
            </div>
            <div>
              <strong>{song.title}</strong> by {song.artist}
            </div>
            <div className="genre-container">{song.genre}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Charts;
