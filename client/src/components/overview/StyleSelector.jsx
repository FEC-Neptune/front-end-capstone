import React, {useState, useEffect} from 'react';

const StyleSelector = ({ productStyles, style, setStyle }) => {



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
          return (
            <div key={i} style={{backgroundImage: `url(${productStyle.photos[0].thumbnail_url})`}}className="style-thumbnail" />
          );
        })}
      </div>
    </section>
  );
};

export default StyleSelector;