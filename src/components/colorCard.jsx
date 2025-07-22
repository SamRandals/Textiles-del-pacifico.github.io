import { useState } from 'react';
import '../styles/colorCard.css';

const images = [
  {
    src: 'https://textilesdelpacifico.co/wp-content/uploads/2024/11/1.jpeg',
    title: 'Algodón 100%',
  },
  {
    src: 'https://textilesdelpacifico.co/wp-content/uploads/2024/11/2.jpeg',
    title: 'PoliAlgodon 65/35',
  },
  {
    src: 'https://textilesdelpacifico.co/wp-content/uploads/2024/11/3.jpeg',
    title: 'Poliester 100%',
  },
];

function ImageScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider__container">
      <img src={images[currentIndex].src} alt="Slide" className="slider__image" />
      <div className="slider__text">
        <h1>{images[currentIndex].title}</h1>
      </div>
      <button className="slider__btn prev" onClick={goToPrev}>←</button>
      <button className="slider__btn next" onClick={goToNext}>→</button>
    </div>
  );
}

export default ImageScroller