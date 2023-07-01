import React, { useState, useEffect } from 'react';
import AddReview from './AddReview.jsx';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = ({reviews, visibleReviews, setVisibleReviews}) => {

  useEffect(() => {
    setVisibleReviews(reviews.slice(0, 2));
  }, []);



  return (
    <div>
      <div id="listSortHeading">{reviews.length} reviews, sorted by relevance</div>
      {visibleReviews.map((review) =>
        <ReviewTile review={review} key={review.review_id} />
      )}
    </div>
  );
};

export default ReviewsList;

