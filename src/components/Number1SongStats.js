import React, { useState } from 'react';
import { FaChartBar, FaNewspaper, FaShareAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../style/Number1SongStats.css';

const Number1SongStats = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };

  const renderHoverContent = () => {
    switch (hoveredItem) {
      case 'stats':
        return (
          <div>
            {/* Display stats related to the song */}
            <p>Song statistics: ...</p>
          </div>
        );
      case 'news':
        return (
          <div>
            {/* Display news related to the artist */}
            <p>3M streams on YouTube</p>
          </div>
        );
      case 'share':
        return (
          <div>
            <ul>
              <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>
              <li><a href="https://twitter.com/"><FaTwitter /></a></li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="number1song-stats-container">
      <div className="number1song-stats-item" onMouseEnter={() => handleHover('stats')} onMouseLeave={handleLeave}>
        <a href="/stats">
          <FaChartBar /> {/* Icon for Stats */}
        </a>
        {hoveredItem === 'stats' && renderHoverContent()}
      </div>
      <div className="number1song-stats-item">
        <h3 className='rank'>1</h3>
        <span>Rank</span>
      </div>
      <div className="number1song-stats-item" onMouseEnter={() => handleHover('news')} onMouseLeave={handleLeave}>
        <a href="/news">
          <FaNewspaper /> {/* Icon for News */}
        </a>
        {hoveredItem === 'news' && renderHoverContent()}
      </div>
      <div className="number1song-stats-item">
        <h2>1</h2>
        <small>Week</small>
      </div>
      <div className="number1song-stats-item" onMouseEnter={() => handleHover('share')} onMouseLeave={handleLeave}>
        <a href="/share">
          <FaShareAlt />
        </a>
        {hoveredItem === 'share' && renderHoverContent()}
      </div>
    </div>
  );
};

export default Number1SongStats;



