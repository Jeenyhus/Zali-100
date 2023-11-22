import React, { useState } from 'react';
import '../style/Charts.css';
import Music from '../data/Music';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import BoomplayIcon from './ButtonIcons/BoomplayIcon';
import Arrows from './ButtonIcons/Arrows';
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
          <a href={song.platforms?.boomplay} target="_blank" rel="noopener noreferrer">
            <BoomplayIcon style={{ color: 'black' }} />
          </a>
          <a href={song.platforms?.boomplay} target="_blank" rel="noopener noreferrer">
            <FaYoutube style={{ color: 'black' }} />
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
        <Arrows coverArt={song.coverArt} movement={song.movement} rank={song.Rank} />
        <div className="text-details">
          <strong>{song.title}</strong> | <small className='artist-name'>{song.artist}</small>
          {clickedSong === song && renderAdditionalDetails(song)}
        </div>
        <div className="streams-container">{song.streamingCount}</div>
      </li>
    );
  };

  return (
    <div className='music'>
      <h3>Top 10 Music</h3>
      <ul>{Music.map((song) => renderSong(song))}</ul>
    </div>
  );
};

export default Charts;
