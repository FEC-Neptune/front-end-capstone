import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Outfit = ( {outfitItems, handleLeftClick, handleRightClick, scrollPosition} ) => (
  <div className='carousel' id='outfit-carousel'>
    <div className='cards-container' id='outfit-cards-container' style={{
      transform: `translateX(${scrollPosition}px)`,
      transition: 'transform 0.5s ease-in-out',
    }}>
      {outfitItems.map((product) => <Card product={product} key={product.id}/>)}
    </div>
    <button className='arrow-button left-arrow-button' id='left-arrow-outfit' onClick={handleLeftClick}></button>
    <button className='arrow-button right-arrow-button' id='right-arrow-outfit' onClick={handleRightClick}></button>
  </div>
);

export default Outfit;