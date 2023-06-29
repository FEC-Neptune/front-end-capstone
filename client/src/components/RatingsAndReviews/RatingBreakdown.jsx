import React, { useState, useEffect } from 'react';
import { getAverageRating, calculateTotalReviews, calculateRatingsPercentage } from '../../lib/ratingsAndReviewsHelpers.js';
import { getReviewsMeta } from '../../lib/requestHelpers.js';


const RatingBreakdown = () => {

  const [averageRating, setAverageRating] = useState('');
  const [oneStar, setOneStar] = useState('');
  const [twoStar, setTwoStar] = useState('');
  const [threeStar, setThreeStar] = useState('');
  const [fourStar, setFourStar] = useState('');
  const [fiveStar, setFiveStar] = useState('');

  useEffect(() => {
    getReviewsMeta(40346)
      .then(({ data }) => {
        let ratings = data.ratings;
        let totalReviews = calculateTotalReviews(ratings);
        setAverageRating(getAverageRating(ratings, 1));
        setOneStar(calculateRatingsPercentage(ratings['1'], totalReviews));
        setTwoStar(calculateRatingsPercentage(ratings['2'], totalReviews));
        setThreeStar(calculateRatingsPercentage(ratings['3'], totalReviews));
        setFourStar(calculateRatingsPercentage(ratings['4'], totalReviews));
        setFiveStar(calculateRatingsPercentage(ratings['5'], totalReviews));
      });
  }, []);

  return (
    <>
      <div>Average Rating: {averageRating}</div>
      <div>5 Stars: {fiveStar}%</div>
      <div>4 Stars: {fourStar}%</div>
      <div>3 Stars: {threeStar}%</div>
      <div>2 Stars: {twoStar}%</div>
      <div>1 Stars: {oneStar}%</div>
    </>
  );
};

export default RatingBreakdown;