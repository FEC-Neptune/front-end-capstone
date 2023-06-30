import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faCircleChevronRight, faCircleChevronLeft, faExpand } from '@fortawesome/free-solid-svg-icons';

const ImageGallery = ({ style, activeImageIndex, setActiveImageIndex, expandedView, setExpandedView }) => {

  const [photos, setPhotos] = useState([]);
  const [thumbnailRange, setThumbnailRange] = useState([0, 7]);

  useEffect(() => {
    if (!!style.photos) {
      setPhotos(style.photos);
    }
  }, [style]);

  const scrollThumbnails = (incrementValue) => {
    var newRange = [thumbnailRange[0] + incrementValue, thumbnailRange[1] + incrementValue];
    setThumbnailRange(newRange);
  };

  const updateActivePhotoIndex = (incrementValue) => {
    var newIndex = activeImageIndex + incrementValue;
    setActiveImageIndex(newIndex);

    if (newIndex < thumbnailRange[0]) {
      setThumbnailRange([newIndex, newIndex + 7]);
    } else if (newIndex > (thumbnailRange[1] - 1)) {
      setThumbnailRange([newIndex - 6, newIndex + 1]);
    }
  };

  // Todo
  //
  // handleExpandedView click (sets expanded view to true)
  // #image-gallery expands to fit parent element width
  // thumbnails disappear and numbers take their place

  if (Array.isArray(photos) && photos.length) {
    return (
      <section id="image-gallery" style={{backgroundImage: `url(${photos[activeImageIndex].url})`}}>
        <div id="thumbnail-container">
          <div className="thumbnail-chevron-container">
            { thumbnailRange[0] > 0 ? (
              <FontAwesomeIcon icon={faChevronUp} className="ig-nav" size="lg" fixedWidth onClick={() => scrollThumbnails(-1)} />
            ) : (
              <></>
            )}
          </div>
          {photos.map((photo, i) => {
            if (i >= thumbnailRange[0] && i < thumbnailRange[1]) {
              if (i === activeImageIndex) {
                return (
                  <div key={i} style={{backgroundImage: `url(${photo.thumbnail_url})`, filter: 'drop-shaddow(0 0 3px #FFF)', border: '1px solid white'}} className="ig-thumbnail" onClick={() => setActiveImageIndex(i)}></div>
                );
              } else {
                return (
                  <div key={i} style={{backgroundImage: `url(${photo.thumbnail_url})`}} className="ig-thumbnail" onClick={() => setActiveImageIndex(i)}></div>
                );
              }
            }
          })}
          <div className="thumbnail-chevron-container">
            { photos.length > thumbnailRange[1] ? (
              <FontAwesomeIcon icon={faChevronDown} className="ig-nav" size="lg" fixedWidth onClick={() => scrollThumbnails(1)} />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div id="image-nav-container">
          <div id="image-nav-expand-container">
            <FontAwesomeIcon icon={faExpand} className="ig-nav" size="lg" fixedWidth />
          </div>
          <div id="image-nav-chevron-container">
            { activeImageIndex > 0 ? (
              <FontAwesomeIcon icon={faCircleChevronLeft} className="ig-nav" size="lg" fixedWidth onClick={() => updateActivePhotoIndex(-1)}/>
            ) : (
              <span></span>
            )}
            { activeImageIndex === photos.length - 1 ? (
              <></>
            ) : (
              <FontAwesomeIcon icon={faCircleChevronRight} className="ig-nav" size="lg" fixedWidth onClick={() => updateActivePhotoIndex(1)}/>
            )}
          </div>
          <div></div>
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