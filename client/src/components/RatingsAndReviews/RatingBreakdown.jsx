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
      <div>{averageRating}</div>
      <div className="starPercentage">5 Stars: {percentage['5']}%</div>
      <div className="starPercentage">4 Stars: {percentage['4']}%</div>
      <div className="starPercentage">3 Stars: {percentage['3']}%</div>
      <div className="starPercentage">2 Stars: {percentage['2']}%</div>
      <div className="starPercentage">1 Stars: {percentage['1']}%</div>
      <div className="recommendPercentage">{recommendPercentage}% of reviews recommend this product</div>
    </section>
  );
};

export default RatingBreakdown;