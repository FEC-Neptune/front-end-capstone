import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
        <div id="thumbnail-container" style={{display: 'flex', flexDirection: 'column', width: 'auto', alignContent: 'center', justifyContent: 'center'}}>
          <FontAwesomeIcon icon={faChevronUp} color="grey"/>
          {photos.map((photo, i) => {
            return (
              <div key={i} style={{backgroundImage: `url(${photo.thumbnail_url})`, height: '75px', width: '75px', margin: '5px', backgroundSize: 'cover', backgroundPositionX: '50%', backgroundPositionY: '50%', border: '1px solid grey'}} className="ig-thumbnail"></div>
            );
          })}
          <FontAwesomeIcon icon={faChevronDown} color="grey"/>
        </div>
        <div id="image-nav-container">

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