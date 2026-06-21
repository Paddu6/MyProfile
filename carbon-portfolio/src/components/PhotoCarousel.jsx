import { useState, useEffect } from 'react';
import './PhotoCarousel.scss';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use Vite's base URL to ensure images work in production
  const baseUrl = import.meta.env.BASE_URL;
  const photos = [
    `${baseUrl}IMG_0539.jpg`,
    `${baseUrl}IMG_4242.jpg`,
    `${baseUrl}IMG_4245.jpg`,
    `${baseUrl}IMG_4247.jpg`,
    `${baseUrl}IMG_4313.jpg`,
    `${baseUrl}IMG_7740.jpg`,
  ];

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="photo-carousel">
      <div className="photo-carousel__container">
        <button 
          className="photo-carousel__button photo-carousel__button--prev"
          onClick={goToPrevious}
          aria-label="Previous photo"
        >
          ‹
        </button>

        <div className="photo-carousel__track">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`photo-carousel__slide ${
                index === currentIndex ? 'photo-carousel__slide--active' : ''
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="photo-carousel__image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <button 
          className="photo-carousel__button photo-carousel__button--next"
          onClick={goToNext}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      <div className="photo-carousel__indicators">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`photo-carousel__indicator ${
              index === currentIndex ? 'photo-carousel__indicator--active' : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;

// Made with Bob
