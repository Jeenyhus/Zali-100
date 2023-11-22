import React, { useState } from 'react';
import '../style/Charts.css';
import Music from '../data/Music';
import { FaSpotify, FaApple } from 'react-icons/fa';

const Charts = () => {
  const [hoveredSong, setHoveredSong] = useState(null);

  const handleHover = (song) => {
    setHoveredSong(song);
  };

  const handleLeave = () => {
    setHoveredSong(null);
  };

  return (
    <div className='music'>
      <h2>Top 10 Music</h2>
      <ul>
        {Music.map((song) => (
          <li key={song.id} onMouseEnter={() => handleHover(song)} onMouseLeave={handleLeave}>
            <div className="arrow-container">
              <img src={song.coverArt} alt={`Cover for ${song.title}`} style={{ width: '50px', height: '50px' }} />
              <div className={`arrow-${song.movement}`}>{song.movement === 'up' ? '↑' : '↓'}</div>
              <div className="rank-container">{song.Rank}</div>
            </div>
            <div className="text-details">
              <strong>{song.title}</strong> | <small>{song.artist}</small>
              {hoveredSong === song && (
                <div className="tooltip">
                  <p>
                    <a href={song.platforms?.spotify} target="_blank" rel="noopener noreferrer">
                      <FaSpotify style={{ color: 'black' }} /> Play on Spotify
                    </a>
                  </p>
                  <p>
                    <a href={song.platforms?.appleMusic} target="_blank" rel="noopener noreferrer">
                      <FaApple style={{ color: 'black' }} /> Play on Apple Music
                    </a>
                  </p>
                  <p>Streams: {song.streamingCount}</p>
                </div>
              )}
            </div>
            <div className="genre-container">{song.genre}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Charts;
