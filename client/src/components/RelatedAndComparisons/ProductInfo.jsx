import React from 'react';
import { useState } from 'react';


const ProductInfo = ( { product, setCurrentProduct } ) => {

  return (
    <div className='info-container'>
      <div className='info-name-container'><div className='info info-name-text' onClick={ () => setCurrentProduct(product.id)} >{product.name}</div></div>
      <div className='info-category-container'><div className='info info-category-text'>{product.category}</div></div>
      <div className='info info-price-text' >{product.default_price}</div>
      <div className='info rating' >*****</div>
    </div>
  );
};

export default ProductInfo;