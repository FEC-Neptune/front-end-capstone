import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const ProductInformation = () => {
  return (
    <section id="product-info">
      <div id="product-reviews">
        <div>STARS</div>
        <div># OF REVIEWS</div>
      </div>
      <p>
        <small>CATEGORY</small>
      </p>
      <h4>
        EXPANDED PRODUCT NAME
      </h4>
      <p>
        <small>$369</small>
      </p>
      <p id="product-description">
        Neopolitan chocolate peanuts chocolate chip bananas oreos. French vanilla chocolate chips coffee cake batter peanuts. Strawberries cake batter rocky road blueberries m&m's, bananas mint gummy worms neopolitan marshmallows caramel syrup.
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