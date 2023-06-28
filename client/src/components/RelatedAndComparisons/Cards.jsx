import React from 'react';
import { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';

const Cards = ( { product } ) => (
  <div>
    <div>product image</div>
    <ProductInfo product={product}/>
  </div>
);

export default Cards;