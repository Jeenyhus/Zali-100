// Arrows.js
import React from 'react';
import '../../style/Arrows.css';

const Arrows = ({ coverArt, movement, rank }) => {
  // Determine the background color based on the movement
  const arrowBackgroundColor = movement === 'up' ? '#28a745' : '#dc3545';

  return (
    <div className="arrow-container">
      <img src={coverArt} alt={`Cover for the song`} className="cover-image" />
      <div className="arrow" style={{ backgroundColor: arrowBackgroundColor }}>
        {movement === 'up' ? '↑' : '↓'}
      </div>
      <div className="rank-container">{rank}</div>
    </div>
  );
};

export default Arrows;

