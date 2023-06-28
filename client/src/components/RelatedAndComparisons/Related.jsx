import React from 'react';
import { useState } from 'react';
import Cards from './Cards.jsx';

const Comparisons = ( { products } ) => (
  <div>
    {products.map((product) => <Cards product={product} key={product.id}/>)}
  </div>
);

export default Comparisons;