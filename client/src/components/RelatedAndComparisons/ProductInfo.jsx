import React from 'react';
import { useState } from 'react';


const ProductInfo = ( { product } ) => {

  return (
    <div className='info-container'>
      <div id='info-name-container'><div className='info' id='info-name-text'>{product.name}</div></div>
      <div id='info-category-container'><div className='info' id='info-category-text'>{product.category}</div></div>
      <div className='info' id='info-price-text'>{product.default_price}</div>
      <div className='info' id='rating'>*****</div>
    </div>
  );
};

export default ProductInfo;