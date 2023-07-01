import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Comparisons = ( { products } ) => (
  <div className='carousel' id='related-carousel'>
    <div className='cards-container' id='related-cards-container'>
      {products.map((product) => <Card product={product} key={product.id} />)}
    </div>
    <button className='arrow-button left-arrow-button' id='left-arrow-related'></button>
    <button className='arrow-button right-arrow-button' id='right-arrow-related'></button>
  </div>
);

export default Comparisons;