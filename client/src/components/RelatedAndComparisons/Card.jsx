import React from 'react';
import { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import CurrentImage from './CurrentImage.jsx';

const Cards = ( { product, setCurrentProduct } ) => {

  return (
    <div className='card' onClick={ () => setCurrentProduct(product.id)}>
      <CurrentImage product={product} />
      <ProductInfo setCurrentProduct={setCurrentProduct} product={product} />
    </div>
  );

};

export default Cards;