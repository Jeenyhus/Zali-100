import React from 'react';
import "../style/HotNews.css"

const HotNews = () => {
  return (
    <div className="card mb-4">
      <img
        src=""
        alt="Sampa the Great"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Sampa the Great Performing at Corona Capital 2023</h5>
        <p className="card-text">
          Sampa the Great is set to perform at Corona Capital 2023 on [Date and Time] at Aeropuerto Internacional De La Ciudad De México, Mexico.
        </p>
        <p className="card-text">
          Fans can get their tickets for the event on{' '}
          <a
            href="https://www.bandsintown.com/t/104863273?app_id=squarespace-priit-siimon-8lme&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=sampathegreat.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bandsintown
          </a>.
        </p>
      </div>
    </div>
  );
};

export default HotNews;