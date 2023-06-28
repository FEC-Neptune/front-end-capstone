import React, { useState, useEffect } from 'react';
import { averageRating } from '../../lib/ratingsAndReviewsHelpers.js';
import { getReviews, getReviewsMeta } from '../../lib/requestHelpers.js';


const RatingBreakdown = ({ reviews }) => {

  const [metaData, setMetaData] = useState('foo');

  useEffect(() => {
    getReviewsMeta(40347)
      .then((data) => {
        setMetaData(data.data);
      });
  }, []);

  const calculateTotalReviews = (data) => {
    var sum = 0;
    for (var key in data.ratings) {
      sum += data.ratings[key];
    }
    return sum;
  };

  const calculateRatingsPercentage = (starRating) => {
    // console.log(starRating);
    let totalReviews = calculateTotalReviews(metaData);
    return Math.round(starRating * 100 / totalReviews);
  };


  return (
    <>
      <div>Average Rating: {averageRating(40347)}</div>
      <div>5 Stars: {calculateRatingsPercentage(13)}%</div>
      {/* <div>4 Stars: {(ratingsCounter[4] * 100) / (totalReviews.length)}%</div>
      <div>3 Stars: {(ratingsCounter[3] * 100) / (totalReviews.length)}%</div>
      <div>2 Stars: {(ratingsCounter[2] * 100) / (totalReviews.length)}%</div>
      <div>1 Stars: {(ratingsCounter[1] * 100) / (totalReviews.length)}%</div> */}
    </>
  );
};

export default RatingBreakdown;