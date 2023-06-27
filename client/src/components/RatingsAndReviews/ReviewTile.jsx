import React from 'react';

const ReviewTile = ({ review }) => {
  return (
    <>
      {review.reviewer_name}, {review.date}
      <div className="review summary">
        {review.summary}
      </div>
      <div className="review body">
        {review.body}
      </div>
    </>
  );
};

export default ReviewTile;