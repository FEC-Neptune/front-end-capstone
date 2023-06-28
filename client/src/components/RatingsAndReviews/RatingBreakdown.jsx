import React from 'react';

const RatingBreakdown = ({reviews}) => {

  const findAverage = (reviewsArray) => {
    let sum = 0;
    reviewsArray.forEach((review) => {
      sum += review.rating;
    });
    return sum / reviewsArray.length;
  };

  return (
    <div>Average Rating: {findAverage(reviews)}</div>
  );
};

export default RatingBreakdown;