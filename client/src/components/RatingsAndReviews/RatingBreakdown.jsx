import React from 'react';

const RatingBreakdown = ({ reviews }) => {

  const findAverage = (reviewsArray) => {
    let sum = 0;
    reviewsArray.forEach((review) => {
      sum += review.rating;
    });
    return (sum / reviewsArray.length);
  };

  let ratingsCounter = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };

  reviews.forEach((review) => {
    if (!ratingsCounter[review.rating]) {
      ratingsCounter[review.rating] = 1;
    } else {
      ratingsCounter[review.rating] ++;
    }
  });

  return (
    <>
      <div>Average Rating: {findAverage(reviews)}</div>
      <div>5 Stars: {(ratingsCounter[5] * 100) / (reviews.length)}%</div>
      <div>4 Stars: {(ratingsCounter[4] * 100) / (reviews.length)}%</div>
      <div>3 Stars: {(ratingsCounter[3] * 100) / (reviews.length)}%</div>
      <div>2 Stars: {(ratingsCounter[2] * 100) / (reviews.length)}%</div>
      <div>1 Stars: {(ratingsCounter[1] * 100) / (reviews.length)}%</div>
    </>
  );
};

export default RatingBreakdown;