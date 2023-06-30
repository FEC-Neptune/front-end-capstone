import React, { useState, useEffect } from 'react';
import AddReview from './AddReview.jsx';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = ({reviews}) => {

  const [visibleReviews, setVisibleReviews] = useState([]);

  useEffect(() => {
    setVisibleReviews(reviews.slice(0, 2));
  }, []);

  const addReviews = () => {
    var index = visibleReviews.length;
    setVisibleReviews(reviews.slice(0, index + 2));
  };

  return (
    <div>
      <div id="listSortHeading">{reviews.length} reviews, sorted by relevance</div>
      {visibleReviews.map((review) =>
        <ReviewTile review={review} key={review.review_id} />
      )}
      {reviews.length !== visibleReviews.length && <button id="moreReviews" onClick={addReviews}>MORE REVIEWS</button>}

      <button id="addReview">ADD REVIEW +</button>
    </div>
  );
};

export default ReviewsList;

