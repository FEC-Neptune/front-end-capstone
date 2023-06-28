import React from 'react';

const StyleSelector = () => {
  return (
    <section id="style-selector">
      <div id="style-name-container">
        <span>Style {('> ')}</span><span>SELECTED STYLE</span>
      </div>
      <div id="style-rows">
        <div className="styles-row">Row of 4 style thumbnails</div>
      </div>
    </section>
  );
};

export default StyleSelector;