import React, { useState, useEffect } from 'react';
import { getAverageRating, calculateTotalReviews, calculateRatingsPercentage, getRecommendPercentage } from '../../lib/ratingsAndReviewsHelpers.js';
import { getReviewsMeta } from '../../lib/requestHelpers.js';


const RatingBreakdown = ({product}) => {

  const [averageRating, setAverageRating] = useState('');
  const [oneStar, setOneStar] = useState('');
  const [twoStar, setTwoStar] = useState('');
  const [threeStar, setThreeStar] = useState('');
  const [fourStar, setFourStar] = useState('');
  const [fiveStar, setFiveStar] = useState('');
  const [recommendPercentage, setRecommendPercentage] = useState('');

  useEffect(() => {
    getReviewsMeta(product)
      .then(({ data }) => {
        let ratings = data.ratings;
        let totalReviews = calculateTotalReviews(ratings);
        setAverageRating(getAverageRating(ratings, 1));
        setOneStar(calculateRatingsPercentage(ratings['1'], totalReviews));
        setTwoStar(calculateRatingsPercentage(ratings['2'], totalReviews));
        setThreeStar(calculateRatingsPercentage(ratings['3'], totalReviews));
        setFourStar(calculateRatingsPercentage(ratings['4'], totalReviews));
        setFiveStar(calculateRatingsPercentage(ratings['5'], totalReviews));
        setRecommendPercentage(getRecommendPercentage(data.recommended));
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
      <div>{recommendPercentage}% of reviews recommend this product</div>
    </>
  );
};

export default RatingBreakdown;