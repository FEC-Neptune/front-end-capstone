import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Comparisons = ( { products } ) => (
  <div className='carousel' id='related-carousel'>
    {products.map((product) => <Card product={product} key={product.id} />)}
  </div>
);

export default Comparisons;