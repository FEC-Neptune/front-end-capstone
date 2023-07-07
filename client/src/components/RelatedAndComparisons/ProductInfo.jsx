import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { getAverageRating, convertRatingToStars} from '../../lib/ratingsAndReviewsHelpers.js';
import { TOKEN } from '../../../../config.js';

const ProductInfo = ( { product, setCurrentProduct} ) => {

  const [stars, setStars] = useState();


  useEffect(() => {
    const fetchRating = () => {
      let options = {
        headers: {
          'Authorization': TOKEN
        }
      };
      axios
        .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${product.id}`, options)
        .then(res => {
          setStars(convertRatingToStars(getAverageRating(res.data.ratings, 1)));
        })
        .catch(err => console.log(err));
    };
    fetchRating();
  }, [product.id]);

  return (
    <div className='info-container'>
      <div className='info-name-container'><div className='info info-name-text' onClick={ () => setCurrentProduct(product.id)} >{product.name}</div></div>
      <div className='info-category-container'><div className='info info-category-text'>{product.category}</div></div>
      <div className='info info-price-text' >{product.default_price}</div>
      <div className='info rating' >{stars}</div>
    </div>
  );
};

export default ProductInfo;