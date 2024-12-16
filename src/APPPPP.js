import React, { useState } from 'react';
import gfimage  from './assets/images/image_loader.gif'
const APPPPP = ({ imageUrl, altText }) => {
  const [isLoaded, setIsLoaded] = useState(false);  // State to check if the image is loaded
  const [hasError, setHasError] = useState(false);  // State to check if the image failed to load

  // Placeholder and error image URLs
  const loadingPlaceholder = gfimage;


  return (
    <div>
      {/* Image tag */}
      <img
        src={ "https://media.istockphoto.com/id/1623892756/photo/alanya-red-tower.jpg?s=1024x1024&w=is&k=20&c=qPk7soP90h-KN0Vsjva3US9F5nfoTisLUYn0_KyOFNE="}
        alt={altText}
        style={{ display: isLoaded ? 'block' : 'none', width: '200px', height: '200px', objectFit: 'cover' }}
        onLoad={() => setIsLoaded(true)}   // On image load, update state to show the image
        onError={() => setHasError(true)}  // If error, show error image
      />

      {/* Loading placeholder (shown while image is loading) */}
      {!isLoaded && !hasError && (
        <img
          src={loadingPlaceholder}
          alt="Loading..."
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
      )}
    </div>
  );
};

export default APPPPP;
