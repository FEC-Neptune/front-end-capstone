import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { createSubarray } from '../../lib/overviewHelpers.js';

const StyleSelector = ({ productStyles, style, setStyle }) => {

  const [productStylesArray, setProductStylesArray] = useState([]);

  useEffect(() => {
    if (!!productStyles) {
      console.log(createSubarray(productStyles, 4));
      setProductStylesArray(createSubarray(productStyles, 4));
    }
  }, [productStyles]);

  const handleClick = (style) => {
    setStyle(style);
  };

  if (Array.isArray(productStylesArray) && productStylesArray.length) {
    return (
      <section id="style-selector">
        <div id="style-name-container">
          <span id="style-name-prefix">Style <FontAwesomeIcon icon={faChevronRight} color="#2b2d42" size="xs"/>&nbsp;&nbsp;</span><span id="style-name-text">{style.name}</span>
        </div>
        <div id="styles-container">
          { productStylesArray.map((array, i) => {
            return (
              <div key={i} className="styles-row">
                { array.map((productStyle, k) => {
                  if (style.style_id === productStyle.style_id) {
                    return (
                      <div key={k} style={{backgroundImage: `url(${productStyle.photos[0].thumbnail_url})`}}className="style-thumbnail">
                        <span className="fa-layers fa-fw">
                          <FontAwesomeIcon icon={faCircle} fixedWidth color="LightGray" />
                          <FontAwesomeIcon icon={faCheck} fixedWidth color="#2b2d42" size="2xs" />
                        </span>
                      </div>
                    );
                  } else {
                    return (
                      <div key={k} style={{backgroundImage: `url(${productStyle.photos[0].thumbnail_url})`}}className="style-thumbnail" onClick={() => handleClick(productStyle)}/>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section id="style-selector">
        <div id="style-name-container">
          <span id="style-name-prefix">Style <FontAwesomeIcon icon={faChevronRight} color="#2b2d42" size="xs"/>&nbsp;&nbsp;</span><span id="style-name-text">{style.name}</span>
        </div>
        <div id="styles-container"></div>
      </section>
    );
  }
};

export default StyleSelector;