import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Related = ( { products, handleLeftClick, handleRightClick, scrollPosition, setCurrentProduct, currentProduct } ) => {

  return (
    <div>
      <div className='carousel' id='related-carousel' >
        <div className='cards-container' id='related-cards-container' style={{
          transform: `translateX(${scrollPosition}px)`,
          transition: 'transform 0.5s ease-in-out',
        }}>
          {products.map((product) =>
            <div onClick={ () => setCurrentProduct(product.id) } className='card-container related-card-container' key={product.id}>
              <Card product={product} key={product.id} />
              <button className='action-button related-action-button' >&#9733;</button>
            </div>
          )}
        </div>
        <button className='arrow-button left-arrow-button left-arrow-related' onClick={handleLeftClick}></button>
        <button className='arrow-button right-arrow-button right-arrow-related' onClick={handleRightClick}></button>
      </div>
    </div>
  );
};

export default Related;