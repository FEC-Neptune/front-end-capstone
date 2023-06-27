import React from 'react';

const ReviewTile = ({ review }) => {
  return (
    <>
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