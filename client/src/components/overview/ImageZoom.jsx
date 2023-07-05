import React, { useState, useEffect, useRef } from 'react';

const ImageZoom = ({ photoURL, toggleZoomedView, bounds, setZoomedMode }) => {

  const zoomImg = useRef({});
  const imgProps = useRef({});
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    imgProps.current = getDefaults();
    imgProps.current.bounds = bounds;
  }, []);

  const zoomScale = 1.5;

  const handleLoad = (e) => {
    const scaledDimensions = getScaledDimensions(e.target, zoomScale);

    zoomImg.current = e.target;
    zoomImg.current.setAttribute('width', scaledDimensions.width);
    zoomImg.current.setAttribute('height', scaledDimensions.height);

    imgProps.current.scaledDimensions = scaledDimensions;
    imgProps.current.ratios = getRatios(imgProps.current.bounds, scaledDimensions);

    initialMove(e.pageX, e.pageY);
  };

  const handleMouseMove = (e) => {
    let left = e.pageX - imgProps.current.offsets.x;
    let top = e.pageY - imgProps.current.offsets.y;

    left = Math.max(Math.min(left, imgProps.current.bounds.width), 0);
    top = Math.max(Math.min(top, imgProps.current.bounds.height), 0);

    if (isNaN(left) || isNaN(top)) {
      setLeft(0.5);
      setTop(0.5);
    } else {
      console.log('left:', left * -imgProps.current.ratios.x, 'top:', top * -imgProps.current.ratios.y);
      setLeft(left * -imgProps.current.ratios.x);
      setTop(top * -imgProps.current.ratios.y);
    }
  };

  const initialMove = (pageX, pageY) => {
    console.log('mouse entered!');
    imgProps.current.offsets = getOffsets(
      window.pageXOffset,
      window.pageYOffset,
      -imgProps.current.bounds.left,
      -imgProps.current.bounds.top
    );

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

  const handleMouseEnter = (e) => {
    initialMove(e.pageX, e.pageY);
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
        onLoad={(e) => handleLoad(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => setZoomedMode(false)}
      />
    </figure>
  );
};

export default ImageZoom;