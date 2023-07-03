import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Outfit = ( {outfitItems, handleLeftClick, handleRightClick, scrollPosition} ) => (
  <div>
    <div className='carousel' id='outfit-carousel'>
      <div className='cards-container' id='outfit-cards-container' style={{
        transform: `translateX(${scrollPosition}px)`,
        transition: 'transform 0.5s ease-in-out',
      }}>
        <div className='card-container add-outfit-button-card' >
          <button className='add-outfit-button'>+</button>
        </div>
        {outfitItems.map((product) =>
          <div className='card-container outfit-card-container' key={product.id} >
            <Card product={product} key={product.id}/>
            <button className='action-button outfit-action-button' >X</button>
          </div>
        )}
      </div>
      <button className='arrow-button left-arrow-button left-arrow-outfit' onClick={handleLeftClick}></button>
      <button className='arrow-button right-arrow-button right-arrow-outfit' onClick={handleRightClick}></button>
    </div>
  </div>
);

export default Outfit;