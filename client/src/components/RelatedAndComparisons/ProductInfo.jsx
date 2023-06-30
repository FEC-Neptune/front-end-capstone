import React from 'react';
import { useState } from 'react';


const ProductInfo = ( { product } ) => {

  return (
    <div className='info-container'>
      <div className='info' id='info-name-text'>{product.name}</div>
      <div className='info' id='info-category-text'>{product.category}</div>
      <div className='info' id='info-price-text'>{product.default_price}</div>
      <div className='info' id='rating'>*****</div>
    </div>
  );
};

export default ProductInfo;