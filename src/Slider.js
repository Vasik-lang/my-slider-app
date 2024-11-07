import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
    'https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1',
    'https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Image+2',
    'https://via.placeholder.com/600x300/5733FF/FFFFFF?text=Image+3',
    'https://via.placeholder.com/600x300/FF33A8/FFFFFF?text=Image+4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
  }, []);

  return (
    <div className="slider">
      <div className="slider-content">
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
