import React from 'react';
import Charts from './Charts';
import HotNews from './HotNews'; 
import Ads from './Ads'; 
import NewArtists from './NewArtists';
import Number1Song from './Number1Song';
import Number1SongStats from './Number1SongStats';

const HomePage = ({ songs }) => {
  return (
    <div className="container my-4">
      {/* This is the brand banner, this displays the name of ther brand (Zali our case) */}
      <div className='Brand-band'>
        <h1 className="display-4 text-center">Zal!</h1>
        <div className='search'>
          <input type='serach' placeholder='Search ..'/>
        </div>
        <button type='submit'>Search</button>
      </div>

      {/* This is the ads sections and all the ads that are brought to the platform will be displayed here */}
      <div className='Advertisements'>
        <Ads />
      </div>

      {/* Banner displaying the number 1 song with its cover art and its rank */}
      <div className='Number1Song'>
        <Number1Song />
      </div>

      {/* Display stats of the trending number 1 song of the week */}
      <div className='Number1SongStats'>
        <Number1SongStats />
      </div>

      {/* This is now the chart that shows all the songs that have been ranking up the charts, in that week of the month */}
      {/* the udea is to do top 100 but we can start with top 10 and the number will increase gradually */}
      <div className="row">
            <Charts song={songs} />
      </div>

      {/* This is the hot news section, this will display any Entertainmment news of the week or the day */}
      {/* This will change every day possibly as Entertainment has news every sec */}
      <HotNews />

      {/* This is the section for the up and coming artists to look out for, as the there is a  risiing star everyday on the music scene */}
      <NewArtists />
    </div>
  );
};

export default HomePage;
