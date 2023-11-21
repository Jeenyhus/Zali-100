import React, { useState } from 'react';
import Charts from './Charts';
import HotNews from './HotNews';
import Ads from './Ads';
import NewArtists from './NewArtists';
import Number1Song from './Number1Song';
import Number1SongStats from './Number1SongStats';
import '../style/HomePage.css';
import { SocialIcon } from 'react-social-icons';
import { FaSearch } from 'react-icons/fa';


const HomePage = ({ songs }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Add your search logic here
    console.log('Search query:', searchQuery);
    // You can implement the actual search functionality based on your requirements
  };
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ZambianMusicWeeklyCharts',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ZMWcharts',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ZaliCharts',
    },
  ];

  return (
    <div className="container my-4">
      <div className="brand-banner">
        <h1 className="display-4 text-center">Zal!</h1>
        <div className='search'>
          <input
            type='search'
            placeholder='Search ...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <a type='button' onClick={handleSearch}>
            <FaSearch />
          </a>
        </div>
      </div>

      <div className='advertisements'>
        <Ads />
      </div>

      <div className='number1-song'>
        <Number1Song />
      </div>

      <div className='number1-song-stats'>
        <Number1SongStats />
      </div>

      <div className="row">
        <Charts songs={songs} />
      </div>

      <div className='hot-news'>
        <HotNews />
      </div>

      <div className='new-artists'>
        <NewArtists />
      </div>
      <div className="footer-container">
        <div className="footer-social">
          <ul className="footer-social-icons">
            {socialLinks.map((link) => (
              <li key={link.name} className="footer-social-icon-item">
                <SocialIcon
                  url={link.url}
                  size={10}
                  style={{ marginRight: 5 }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-info">
          <small>
            Zali is a Zambian Music Weekly Chart based of Online streams from
            YouTube, Spotify and Apple Music. Getting your the best Zambian music
            from all corners of the country.
          </small>
        </div>
        <div className="footer-copyright">
          <small>&copy; 2023 Zali Music Charts</small>
        </div>
      </div>

    </div>

  );
};

export default HomePage;
