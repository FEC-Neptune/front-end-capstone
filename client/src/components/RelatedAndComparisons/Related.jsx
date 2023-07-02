import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Comparisons = ( { products, handleLeftClick, handleRightClick, scrollPosition } ) => {

  return (
    <div className='carousel' id='related-carousel' >
      <div className='cards-container' id='related-cards-container' style={{
        transform: `translateX(${scrollPosition}px)`,
        transition: 'transform 0.5s ease-in-out',
      }}>
        {products.map((product) => <Card product={product} key={product.id} />)}
      </div>
      <button className='arrow-button left-arrow-button' id='left-arrow-related' onClick={handleLeftClick}></button>
      <button className='arrow-button right-arrow-button' id='right-arrow-related' onClick={handleRightClick}></button>
    </div>
  );
};

export default Comparisons;