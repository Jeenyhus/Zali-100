import React from 'react';
import "../style/Ads.css"

const Ads = () => {
  return (
    <div className="card mb-4">
      {/* this could be any paid add on the platform this is just an example, can be Yango, KFC or EMack */}
      <img
        src="https://av.sc.com/zm/content/images/zm-agent-banking-masthead-desktop.jpg"
        alt="Standard Chartered Bank Ad"
        className="card-img-top"
      />
    </div>
  );
};

export default Ads;