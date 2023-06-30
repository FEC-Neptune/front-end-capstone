import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Comparisons = ( { products } ) => (
  <div className='carousel' id='related-carousel'>
    <div className='cards-container' id='related-cards-container'>
      {products.map((product) => <Card product={product} key={product.id} />)}
    </div>
  </div>
);

export default Comparisons;