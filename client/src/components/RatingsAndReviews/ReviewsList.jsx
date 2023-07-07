import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = ({visibleReviews}) => {

  if (visibleReviews === null) {
    return null;
  }
  // useEffect(() => {
  //   setVisibleReviews(reviews.slice(0, 2));
  // }, []);
  return (
    <div id="reviewsList">
      {visibleReviews.map((review, i) =>
        <ReviewTile review={review} key={review.review_id}/>
      )}
    </div>
  );
};

export default ReviewsList;

