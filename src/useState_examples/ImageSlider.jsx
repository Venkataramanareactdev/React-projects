import React, { useState } from 'react';
  
function ImageSlider() {
  const imageUrls = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/600/400?random=${i}`);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Image Slider</h2>
      <div style={{ width: '400px', height: '300px', margin: '0 auto' }}>
        <img
  src={imageUrls[currentIndex]}
  alt={`Slide ${currentIndex + 1}`}
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>

      </div>
      <p>{`Image ${currentIndex + 1}`}</p>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default ImageSlider;
