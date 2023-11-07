import React from 'react';
import "../style/Ads.css"

const Ads = () => {
  return (
    <div className="card mb-4">
      <img
        src="https://av.sc.com/zm/content/images/zm-agent-banking-masthead-desktop.jpg" // Replace with actual ad image URL
        alt="Standard Chartered Bank Ad"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Standard Chartered Bank</h5>
        <p className="card-text">
          Experience our agent banking services. Learn more at{' '}
          <a
            href="https://www.sc.com/zm/agent-banking-services/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Standard Chartered Bank
          </a>
        </p>
      </div>
    </div>
  );
};

export default Ads;