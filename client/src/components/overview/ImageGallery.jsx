import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faCircleChevronRight, faCircleChevronLeft, faExpand } from '@fortawesome/free-solid-svg-icons';

const ImageGallery = ({ style, activeImageIndex, setActiveImageIndex, expandedView, setExpandedView }) => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!!style.photos) {
      console.log(Array.isArray(style.photos));
      setPhotos(style.photos.slice(0, 7));
    }
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
        <div id="thumbnail-container">
          <FontAwesomeIcon icon={faChevronUp} className="ig-nav" size="lg" />
          {photos.map((photo, i) => {
            return (
              <div key={i} style={{backgroundImage: `url(${photo.thumbnail_url})`}} className="ig-thumbnail"></div>
            );
          })}
          <FontAwesomeIcon icon={faChevronDown} className="ig-nav" size="lg"/>
        </div>
        <div id="image-nav-container">
          <FontAwesomeIcon icon={faExpand} className="ig-nav" size="lg"/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="ig-nav" size="lg"/>
          <FontAwesomeIcon icon={faCircleChevronRight} className="ig-nav" size="lg"/>
        </div>
      </section>
    );
  } else {
    return (
      <section id="image-gallery"></section>
    );
  }
};

export default ImageGallery;