import React, { useState, useEffect } from 'react';
import { getAverageRating, calculateTotalReviews, calculateRatingsPercentage, getRecommendPercentage } from '../../lib/ratingsAndReviewsHelpers.js';
import { getReviewsMeta } from '../../lib/requestHelpers.js';

const RatingBreakdown = ({ metaData }) => {

  let ratings = metaData.ratings;
  let totalReviews = calculateTotalReviews(ratings);
  let averageRating = getAverageRating(ratings, 1);
  let percentage = calculateRatingsPercentage(ratings, totalReviews);
  let recommendPercentage = getRecommendPercentage(metaData.recommended);

  return (
    <section id="breakdown">
      <div>Average Rating: {averageRating}</div>
      <div>5 Stars: {percentage['5']}%</div>
      <div>4 Stars: {percentage['4']}%</div>
      <div>3 Stars: {percentage['3']}%</div>
      <div>2 Stars: {percentage['2']}%</div>
      <div>1 Stars: {percentage['1']}%</div>
      <div>{recommendPercentage}% of reviews recommend this product</div>
    </section>
  );
};

export default RatingBreakdown;