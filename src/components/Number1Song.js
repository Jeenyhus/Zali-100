import React, { useState, useEffect } from 'react';
import { FaSpotify, FaApple } from 'react-icons/fa';
import '../style/Number1Song.css';
import Music from '../data/Music';

const Number1Song = () => {
  const topSong = Music[0];

  return (
    <div className="number1song-stats-container">
      <div className="number1song-stats-item">
        <iframe
          title={topSong.title}
          src={topSong.platforms.spotify.replace('/track/', '/embed/track/')}
          width="100%"
          height="80"
          allowtransparency="true"
        ></iframe>
      </div>
      <div className="number1song-stats-item">
        <h1 className="rank"># {topSong.Rank}</h1>
      </div>
      <div className="number1song-stats-item">
        <h1 className="number1song-card__artist">{topSong.streamingCount}</h1> 
      </div>
      <div className="number1song-stats-item">
        <FaApple className="platform-icon" />
        
        <FaSpotify className="platform-icon" />
        <small>streams</small>
      </div>

    </div>
  );
};

export default Number1Song;

