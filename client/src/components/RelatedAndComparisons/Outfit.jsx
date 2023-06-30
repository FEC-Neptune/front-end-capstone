import React from 'react';
import { useState } from 'react';
import Card from './Card.jsx';

const Outfit = ( {outfitItems} ) => (
  <div className='carousel' id='outfit-carousel'>
    <div className='cards-container' id='outfit-cards-container'>
      {outfitItems.map((product) => <Card product={product} key={product.id}/>)}
    </div>
    <button className='arrow-button left-arrow-button' id='left-arrow-outfit'></button>
    <button className='arrow-button right-arrow-button' id='right-arrow-outfit'></button>
  </div>
);

export default Outfit;