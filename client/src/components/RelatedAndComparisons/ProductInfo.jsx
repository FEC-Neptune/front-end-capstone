import React from 'react';
import { useState } from 'react';


const ProductInfo = ( { product } ) => {

  return (
    <div>
      <div>{product.category}</div>
      <div>{product.name}</div>
      <div>{product.default_price}</div>
      <div>*****</div>
    </div>
  );
};

export default ProductInfo;