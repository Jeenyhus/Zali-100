// src/components/HomePage.js

import React from 'react';
import Charts from './Charts';
import HotNews from './HotNews'; // Import the HotNews component
import Ads from './Ads'; // Import the Ads component
import NewArtists from './NewArtists'; // Import the NewArtists component

const HomePage = ({ songs }) => {
  return (
    <div className="container my-4">
      <h1 className="display-4 text-center">Zal!</h1>
      <nav className="text-center my-4">
        {/* Navigation links for different chart categories */}
        <a href="/top-10" className="btn btn-link mx-2">Top 10</a>
        <a href="/top-20" className="btn btn-link mx-2">Top 20</a>
        <a href="/top-50" className="btn btn-link mx-2">Top 50</a>
        <a href="/top-100" className="btn btn-link mx-2">Top 100</a>
      </nav>
      <div className="row">
        {songs.map((song) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={song.id}>
            <Charts song={song} />
          </div>
        ))}
      </div>
      <HotNews /> {/* Include the HotNews section here */}
      <Ads /> {/* Include the Ads section here */}
      <NewArtists /> {/* Include the NewArtists section here */}
    </div>
  );
};

export default HomePage;
