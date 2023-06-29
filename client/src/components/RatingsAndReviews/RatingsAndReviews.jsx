import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewForm from './NewReviewForm.jsx';
import AddReview from './AddReview.jsx';
import Characteristics from './Characteristics.jsx';
import { getReviews, getReviewsMeta } from '../../lib/requestHelpers.js';


const RatingsAndReviews = ({ product, setProduct }) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState('');

  useEffect(() => {
    getReviews(product)
      .then((reviews) => {
        setReviews(reviews);
      })
      .then(() => {
        return getReviewsMeta(product);
      })
      .then(({ data }) => {
        console.log(data);
        setReviewsMeta(data);
      })
      .catch((err) => {
        throw (err);
      });
  }, []);

  return (
    <section id="ratingsAndReviews">
      <div id="mainTitle">Ratings and Reviews</div>

      {reviews.length > 0 &&
        <div>
          {reviewsMeta && <RatingBreakdown metaData={reviewsMeta} />}
          {reviewsMeta && <Characteristics metaData={reviewsMeta} />}
          <ReviewsList reviews={reviews} />
        </div>}
      <div id="addReview"><AddReview /></div>
    </section>
  );
};

export default RatingsAndReviews;