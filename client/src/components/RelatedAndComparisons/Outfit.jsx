import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Outfit = ( {outfitItems} ) => (
  <div className='carousel' id='outfit-carousel'>
    <div className='cards-container' id='outfit-cards-container'>
      {outfitItems.map((product) => <Card product={product} key={product.id}/>)}
    </div>
  </div>
);

export default Outfit;