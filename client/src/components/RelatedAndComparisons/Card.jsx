import React from 'react';
import { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import CurrentImage from './CurrentImage.jsx';

const Cards = ( { product, setCurrentProduct, stars } ) => {

  return (
    <div className='card' onClick={ () => setCurrentProduct(product.id)}>
      <CurrentImage product={product} />
      <ProductInfo setCurrentProduct={setCurrentProduct} product={product} stars={stars}/>
    </div>
  );

};

export default Cards;