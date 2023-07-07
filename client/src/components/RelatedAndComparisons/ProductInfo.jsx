import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { getAverageRating, convertRatingToStars} from '../../lib/ratingsAndReviewsHelpers.js';
import Stars from './Stars.jsx';
import { TOKEN } from '../../../../config.js';

const ProductInfo = ( { product, setCurrentProduct, hoverToggle} ) => {

  return (
    <div className='info-container'>
      <div className='info-name-container'><div className='info info-name-text' style={ hoverToggle ? {color: '#809791'} : {color: '#2c474f'} } onClick={ () => setCurrentProduct(product.id)} >{product.name}</div></div>
      <div className='info-category-container'><div className='info info-category-text'>{product.category}</div></div>
      <div className='info info-price-text' >{product.default_price}</div>
      <div className='info rating' ><Stars productID={product.id}/></div>
    </div>
  );
};

export default ProductInfo;