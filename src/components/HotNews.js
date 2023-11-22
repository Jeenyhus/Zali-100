import React, { useState, useEffect } from 'react';
import "../style/HotNews.css";

const HotNews = () => {
  const headlines = [
    'Yo Maps surpasses 3M streams in 4 DAYS!!',
    'New Album Release: "Melodies of the Heart"',
    'EXCLUSIVE Interview with Yo Maps: Behind the Music'
  ];

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 5000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <div className="hotnews-container">
      <div className="hotnews-stats-item">
        <a href='/news'>{headlines[currentHeadlineIndex]}</a>
      </div>
      <div className="hotnews-stats-item">
        <a href="/share">story</a>
      </div>
    </div>
  );
};

export default HotNews;
