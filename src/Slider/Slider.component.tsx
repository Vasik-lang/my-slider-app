import React, { useState, useEffect } from "react";
import image1 from "./Images/image1.JPG";
import image2 from "./Images/image2.JPG";
import image3 from "./Images/image3.JPG";
import image4 from "./Images/image4.JPG";

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  const images: string[] = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <div className="slider-content">
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
