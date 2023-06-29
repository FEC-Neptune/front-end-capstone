import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Outfit = ( {outfitItems} ) => (
  <div className='carousel'>
    {outfitItems.map((product) => <Card product={product} key={product.id}/>)}
  </div>
);

export default Outfit;