import React from 'react';
import { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import CurrentImage from './CurrentImage.jsx';

const Cards = ( { product } ) => {

  return (
    <div className='card-container'>
      <div className='card'>
        <CurrentImage product={product} />
        <ProductInfo product={product} />
      </div>
    </div>
  );

};

export default Cards;