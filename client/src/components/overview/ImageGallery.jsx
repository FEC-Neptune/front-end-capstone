import React, { useState, useEffect } from 'react';

const ImageGallery = ({ style, activeImageIndex, setActiveImageIndex, expandedView, setExpandedView }) => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(style.photos);
  }, [style]);

  // Todo
  // set image-gallery background image to be style.photos[activeImageIndex].thumbnail_url
  //
  // handleThumbnail click (updates activeImageIndex)
  //
  // handleExpandedView click (sets expanded view to true)
  // #image-gallery expands to fit parent element width
  // thumbnails disappear and numbers take their place

  if (Array.isArray(photos) && photos.length) {
    return (
      <section id="image-gallery" style={{backgroundImage: `url(${photos[activeImageIndex].url})`}}>
      </section>
    );
  } else {
    return (
      <section id="image-gallery"></section>
    );
  }
};

export default ImageGallery;