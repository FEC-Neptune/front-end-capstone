import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = ({reviews, visibleReviews, setVisibleReviews }) => {

  useEffect(() => {
    setVisibleReviews(reviews.slice(0, 2));
  }, []);



  return (
    <div id="reviewsList">
      {visibleReviews.map((review) =>
        <ReviewTile review={review} key={review.review_id}/>
      )}
    </div>
  );
};

export default ReviewsList;

