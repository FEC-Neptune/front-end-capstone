import React from 'react';
import { useState } from 'react';


const ProductInfo = ( { product } ) => {

  return (
    <div>
      <div className='info'>{product.category}</div>
      <div className='info'>{product.name}</div>
      <div className='info'>{product.default_price}</div>
      <div className='info'>*****</div>
    </div>
  );
};

export default ProductInfo;