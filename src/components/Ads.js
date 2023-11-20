import React, { useState, useEffect } from 'react';
import '../style/Ads.css';

const Ads = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const ads = [
    {
      src: 'https://av.sc.com/zm/content/images/zm-agent-banking-masthead-desktop.jpg',
      alt: 'Standard Chartered Bank Advertisement',
    },
    {
      src: 'https://www.zoomtecnologico.com/wp-content/uploads/2022/11/yango-a-scaled.jpeg',
      alt: 'Yango Delivery Service Advertisement',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdlzxYS5-fiIpGg3d62B4CjQhyhVQz0GLxUt1tL3ZVCfM1kJpzdj3O9b88wVppj7LfxM&usqp=CAU',
      alt: 'KFC Restaurant Advertisement',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAdIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % ads.length;
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="ads-container">
      <img src={ads[currentAdIndex].src} alt={ads[currentAdIndex].alt} className="ad-image" />
    </div>
  );
};

export default Ads;
