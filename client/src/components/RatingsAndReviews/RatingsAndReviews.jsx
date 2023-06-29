import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewForm from './NewReviewForm.jsx';
import AddReview from './AddReview.jsx';
import Characteristics from './Characteristics.jsx';
import {getReviews, getReviewsMeta} from '../../lib/requestHelpers.js';


const RatingsAndReviews = ({product, setProduct}) => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(product)
      .then((reviews) => {
        setReviews(reviews);
      });
  }, []);

  return (
    <>
      <h2>Ratings and Reviews</h2>

      {reviews.length > 0 &&
        <div>
          <RatingBreakdown product={product}/>
          <Characteristics product={product}/>
          <ReviewsList reviews={reviews} getReviews={getReviews} product={product} />
        </div>}
      <AddReview />
    </>
  );
};

export default RatingsAndReviews;