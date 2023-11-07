import React from 'react';
import "../style/NewArtists.css"

const NewArtists = () => {
  return (
    <div className="card mb-4">
      <img
        src="https://www.zambianmusicpromos.co/wp-content/uploads/Mordecaii-Aweh-Yo-Maps-Cover.jpg.webp"
        alt="Modecaii"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Modecaii Hints at New Music</h5>
        <p className="card-text">
          Exciting news from Modecaii! The artist has dropped hints about upcoming new music. Stay tuned for more updates.
        </p>
        <p className="card-text">
          Check out the hint on{' '}
          <a
            href="https://www.instagram.com/reel/CzJszCTIEOU/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>.
        </p>
      </div>
    </div>
  );
};

export default NewArtists;
