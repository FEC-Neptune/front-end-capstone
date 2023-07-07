import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getAverageRating } from '../../lib/ratingsAndReviewsHelpers.js';
import Stars from './Stars.jsx';

const ProductInformation = ({product, style, reviewsData}) => {

  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (!!reviewsData.average) {
      setRating(Number(reviewsData.average));
    } else {
      setRating(0);
    }

  }, [reviewsData]);

  return (
    <section id="product-info">
      <div id="product-reviews-container">
        <div id="product-rating-container">
          <Stars starRating={rating} />
        </div>
        <a href="#ratings-and-reviews" id="product-review-count-text">Read all {reviewsData.count} reviews</a>
      </div>
      <div id="product-category-container">
        <span id="product-category-text">{product.category ? (product.category) : ''}</span>
      </div>
      <div id="product-name-container">
        <h1 id="product-name-text">
          {product.name ? (product.name) : ('')}
        </h1>
      </div>
      <div id="product-price-container">
        { !!style.sale_price ? (
          <>
            <span id="product-sale-price-text">
              ${Math.round(parseInt(style.sale_price))}
            </span>
            <small id="product-default-price-text" style={{textDecoration: 'line-through'}}>
              ${Math.round(parseInt(product.default_price))}
            </small>
          </>
        ) : (
          <>
            <span id="product-default-price-text">
              ${Math.round(parseInt(product.default_price))}
            </span>
          </>
        )}

      </div>
      <div id="product-description-container">
        <p id="product-description-text">
          {product.description}
        </p>
      </div>
      <div id="social-container">
        <a href="https://facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="xl" color="#4267B2" fixedWidth />
        </a>
        <a href="https://twitter.com/intent/tweet?text=Hey%20check%20out%20this%20amazing%20item%20I%20found." target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="xl" color="#1DA1F2" fixedWidth />
        </a>
        <a href="https://pinterest.com" target="_blank">
          <FontAwesomeIcon icon={faPinterest} size="xl" color="#E60023" fixedWidth />
        </a>
      </div>
    </section>
  );
};

export default ProductInformation;