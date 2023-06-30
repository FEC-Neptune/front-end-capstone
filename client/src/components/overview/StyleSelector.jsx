import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle} from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-regular-svg-icons';

const StyleSelector = ({ productStyles, style, setStyle }) => {

  // const [selectedStyleIndex, setSelectedStyleIndex] = useState

  const handleClick = (i) => {
    // todo: switch styles
  };

  return (
    <section id="style-selector">
      <div id="style-name-container">
        <span>Style {('> ')}</span><span>{style.name}</span>
      </div>
      <div id="styles-container">
        { productStyles.map((productStyle, i) => {
          if (style.style_id === productStyle.style_id) {
            return (
              <div key={i} style={{backgroundImage: `url(${productStyle.photos[0].thumbnail_url})`}}className="style-thumbnail">
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon={faCircle} fixedWidth color="LightGray" />
                  <FontAwesomeIcon icon={faCheck} fixedWidth color="#2b2d42" size="2xs" />
                </span>
              </div>
            );
          } else {
            return (
              <div key={i} style={{backgroundImage: `url(${productStyle.photos[0].thumbnail_url})`}}className="style-thumbnail" />
            );
          }
        })}
      </div>
    </section>
  );
};

export default StyleSelector;