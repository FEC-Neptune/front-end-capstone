import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Related = ( { products, handleLeftClick, handleRightClick, scrollPosition, setMainCompareProduct, setCurrentProduct, setCompareProduct, currentProduct, openModal, closeModal, modalToggle } ) => {


  return (
    <div>
      <div className='carousel' id='related-carousel' >
        <div className='cards-container' id='related-cards-container' style={{
          transform: `translateX(${scrollPosition}px)`,
          transition: 'transform 0.5s ease-in-out',
        }}>
          {products.map((product) =>
            <div className='card-container related-card-container' key={product.id}>
              <Card product={product} key={product.id} setCurrentProduct={setCurrentProduct} />
              <button className='action-button related-action-button' onClick={() => { setCompareProduct(product); modalToggle ? closeModal() : openModal(); } }>&#9733;</button>
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