import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const ProductInformation = ({product, style}) => {
  return (
    <section id="product-info">
      <div id="product-reviews">
        <div>STARS</div>
        <div># OF REVIEWS</div>
      </div>
      <p>
        <small>{product.category ? (product.category) : 'CATEGORY'}</small>
      </p>
      <h4>
        {product.name ? (product.name) : ('EXPANDED PRODUCT NAME')}
      </h4>
      <p>
        <small>{product.default_price ? ('$' + product.default_price) : ('$369')}</small>
      </p>
      <p id="product-description">
        {product.description}
      </p>
      <div id="social-container">
        <FontAwesomeIcon icon={faFacebook} size="lg" />
        <FontAwesomeIcon icon={faTwitter} size="lg" />
        <FontAwesomeIcon icon={faPinterest} size="lg" />
      </div>
    </section>
  );
};

export default ProductInformation;