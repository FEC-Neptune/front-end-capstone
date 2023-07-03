import React, { useState, useEffect } from 'react';
import AddReview from './AddReview.jsx';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = ({reviews, visibleReviews, setVisibleReviews, convertRatingToStars }) => {

  useEffect(() => {
    setVisibleReviews(reviews.slice(0, 2));
  }, []);



  return (
    <div id="reviewsList">
      {visibleReviews.map((review) =>
        <ReviewTile review={review} key={review.review_id} convertRatingToStars={convertRatingToStars}/>
      )}
    </div>
  );
};

export default ReviewsList;

