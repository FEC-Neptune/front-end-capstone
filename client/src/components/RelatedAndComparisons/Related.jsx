import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card.jsx';
// import axios from 'axios';
// import { getAverageRating, convertRatingToStars} from '../../lib/ratingsAndReviewsHelpers.js';
// import { TOKEN } from '../../../../config.js';

const Related = ( { products, handleLeftClick, handleRightClick, scrollPosition, setMainCompareProduct, setCurrentProduct, setCompareProduct, currentProduct, openModal, closeModal, modalToggle } ) => {

  // const stars = (product) => useEffect(() => {
  //   const fetchRating = () => {
  //     let options = {
  //       headers: {
  //         'Authorization': TOKEN
  //       }
  //     };
  //     axios
  //       .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${product.id}`, options)
  //       .then(res => convertRatingToStars(getAverageRating(res.data.ratings, 1)))
  //       .catch(err => console.log(err));
  //   };
  //   fetchRating();
  // }, []);


  return (
    <div>
      <div className='carousel' id='related-carousel' >
        <div className='cards-container' id='related-cards-container' style={{
          transform: `translateX(${scrollPosition}px)`,
          transition: 'transform 0.5s ease-in-out',
        }}>
          {products.map((product) =>
            <div className='card-container related-card-container' key={product.id}>
              <Card product={product} key={product.id} setCurrentProduct={setCurrentProduct} />
              <button className='action-button related-action-button' onClick={() => { setCompareProduct(product); modalToggle ? closeModal() : openModal(); } }>&#9733;</button>
            </div>
          )}
        </div>
        <button className='arrow-button left-arrow-button left-arrow-related' onClick={handleLeftClick}></button>
        <button className='arrow-button right-arrow-button right-arrow-related' onClick={handleRightClick}></button>
      </div>
    </div>
  );
};

export default Related;