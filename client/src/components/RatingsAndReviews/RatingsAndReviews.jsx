import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewForm from './NewReviewForm.jsx';
import AddReview from './AddReview.jsx';
import { TOKEN } from '../../../../config.js';
import {getReviews, getReviewsMeta} from '../../lib/requestHelpers.js';
const axios = require('axios');

const RatingsAndReviews = () => {

  const [product, setProduct] = useState(40347);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(40344)
      .then((reviews) => {
        setReviews(reviews);
      });
  }, []);



  return (
    <>
      <h2>Ratings and Reviews</h2>

      {reviews.length > 0 &&
        <div>
          <RatingBreakdown reviews={reviews} />
          <ReviewsList reviews={reviews} getReviews={getReviews} product={product} />
        </div>}
      <AddReview />
    </>
  );
};

export default RatingsAndReviews;