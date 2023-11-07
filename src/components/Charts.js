import React, { useState } from 'react';
import { FaSpotify, FaApple } from 'react-icons/fa';
import '../style/Charts.css';


const Charts = ({ song, rank }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card mb-3 ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
      <div className="row g-0">
        <div className="col-md-3">
          <img className="img-fluid rounded-circle" src={song.coverArt} alt={song.title} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <span className="badge bg-danger">{rank}</span>
            <h5 className="card-title" onClick={handleExpand}>
              {song.title}
            </h5>
            <p className="card-text">{song.artist}</p>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="card-body">
          <p className="card-text">Genre: {song.genre}</p>
          <p className="card-text">Streams: {song.streamingCount}</p>
          <p className="card-text">Release: {song.releaseDate}</p>
          <div className="d-flex justify-content-center">
            <a href={song.platforms.spotify} className="btn btn-success me-2">
              <FaSpotify className="me-1" />
              Spotify
            </a>
            <a href={song.platforms.appleMusic} className="btn btn-warning">
              <FaApple className="me-1" />
              Apple Music
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Charts;
