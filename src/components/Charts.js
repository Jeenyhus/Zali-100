import React, { useState } from 'react';
import '../style/Charts.css';
import Music from '../data/Music';
import { FaSpotify, FaApple } from 'react-icons/fa';

const Charts = () => {
  const [clickedSong, setClickedSong] = useState(null);

  const handleSongClick = (song) => {
    setClickedSong(clickedSong === song ? null : song);
  };

  const renderAdditionalDetails = (song) => {
    return (
      <div className="additional-details">
        <small>{song.releaseDate}</small> |
        <small> {song.genre}</small>
        <div className='platforms-container'>
          <a href={song.platforms?.spotify} target="_blank" rel="noopener noreferrer">
            <FaSpotify style={{ color: 'black' }} />
          </a>
          <a href={song.platforms?.appleMusic} target="_blank" rel="noopener noreferrer">
            <FaApple style={{ color: 'black' }} />
          </a>
        </div>
      </div>
    );
  };

  const renderSong = (song) => {
    return (
      <li
        key={song.id}
        onClick={() => handleSongClick(song)}
      >
        <div className="arrow-container">
          <img src={song.coverArt} alt={`Cover for ${song.title}`} style={{ width: '50px', height: '50px' }} />
          <div className={`arrow-${song.movement}`}>{song.movement === 'up' ? '↑' : '↓'}</div>
          <div className="rank-container">{song.Rank}</div>
        </div>
        <div className="text-details">
          <strong>{song.title}</strong> | <small>{song.artist}</small>
          {clickedSong === song && renderAdditionalDetails(song)}
        </div>
        <div className="streams-container">{song.streamingCount}</div>
      </li>
    );
  };

  return (
    <div className='music'>
      <h2>Top 10 Music</h2>
      <ul>{Music.map((song) => renderSong(song))}</ul>
    </div>
  );
};

export default Charts;
