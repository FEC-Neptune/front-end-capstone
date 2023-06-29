import React from 'react';
import { useState } from 'react';


const ProductInfo = ( { product } ) => {

  return (
    <div className='info-container'>
      <div className='info'><div className='info-name-border'><div className='info-name-text'>{product.name}</div></div></div>
      <div className='info'>{product.category}</div>
      <div className='info'>{product.default_price}</div>
      <div className='info'>*****</div>
    </div>
  );
};

export default ProductInfo;