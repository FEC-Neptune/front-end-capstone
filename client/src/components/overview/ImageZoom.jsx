import React, { useState, useEffect, useRef } from 'react';

const ImageZoom = ({ photoURL, setPhotoURL, toggleZoomedView, bounds, setZoomedMode }) => {

  const zoomImg = useRef({});
  const imgProps = useRef({});
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    imgProps.current = getDefaults();
    imgProps.current.bounds = bounds;
    setPhotoURL(photoURL);
  }, [photoURL, bounds]);

  useEffect(() => {
    const scaledDimensions = getScaledDimensions(zoomImg.current, zoomScale);

    zoomImg.current.setAttribute('width', scaledDimensions.width);
    zoomImg.current.setAttribute('height', scaledDimensions.height);

    imgProps.current.scaledDimensions = scaledDimensions;
    imgProps.current.ratios = getRatios(imgProps.current.bounds, scaledDimensions);

    imgProps.current.offsets = getOffsets(
      window.pageXOffset,
      window.pageYOffset,
      -imgProps.current.bounds.left,
      -imgProps.current.bounds.top
    );

  }, [zoomImg.current]);

  const zoomScale = 2.5;

  const handleMouseMove = (e) => {
    let left = e.pageX - imgProps.current.offsets.x;
    let top = e.pageY - imgProps.current.offsets.y;

    left = Math.max(Math.min(left, imgProps.current.bounds.width), 0);
    top = Math.max(Math.min(top, imgProps.current.bounds.height), 0);

    if (isNaN(left) || isNaN(top)) {
      return;
    } else {
      setLeft(left * -imgProps.current.ratios.x);
      setTop(top * -imgProps.current.ratios.y);
    }
  };

  const initialMove = (pageX, pageY) => {
    handleMouseMove({ pageX, pageY });
  };

  const getDefaults = () => {
    return {
      bounds: {},
      offsets: {},
      ratios: {},
      scaledDimensions: {}
    };
  };

  const getOffsets = (pageX, pageY, left, top) => {
    return {
      x: pageX + left,
      y: pageY + top
    };
  };

  const getRatios = (bounds, dimensions) => {
    return {
      x: (dimensions.width - bounds.width) / bounds.width,
      y: (dimensions.height - bounds.height) / bounds.height
    };
  };

  const getScaledDimensions = (zoomImg, zoomScale) => {
    return {
      width: zoomImg.naturalWidth * zoomScale,
      height: zoomImg.naturalHeight * zoomScale
    };
  };

  return (
    <figure onClick={toggleZoomedView} className="image-zoom-container" style={{ width: '100%'}} >
      <img
        className="image-zoom"
        src={photoURL}
        style={{
          top: top,
          left: left
        }}
        ref={zoomImg}
        onLoad={(e) => handleMouseMove(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseEnter={(e) => handleMouseMove(e)}
      />
    </figure>
  );
};

export default ImageZoom;