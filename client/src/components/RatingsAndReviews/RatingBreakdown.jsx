import React, { useState, useEffect } from 'react';
import { getAverageRating, calculateTotalReviews, calculateRatingsPercentage, getRecommendPercentage } from '../../lib/ratingsAndReviewsHelpers.js';
import { getReviewsMeta } from '../../lib/requestHelpers.js';

const RatingBreakdown = ({ metaData, reveiws, setReviews, sortReviews }) => {

  let ratings = metaData.ratings;
  let totalReviews = calculateTotalReviews(ratings);
  let averageRating = getAverageRating(ratings, 1);
  let percentage = calculateRatingsPercentage(ratings, totalReviews);
  let recommendPercentage = getRecommendPercentage(metaData.recommended);

  return (
    <div id="breakdown">
      <div className="averageRating">{averageRating}</div>
      <div className="starPercentage" onClick={() => {
        sortReviews(5);
      }}>5 Stars: {percentage['5']}%</div>
      <div className="starPercentage" onClick={() => {
        sortReviews(4);
      }}>4 Stars: {percentage['4']}%</div>
      <div className="starPercentage" onClick={() => {
        sortReviews(3);
      }}>3 Stars: {percentage['3']}%</div>
      <div className="starPercentage" onClick={() => {
        sortReviews(2);
      }}>2 Stars: {percentage['2']}%</div>
      <div className="starPercentage" onClick={() => {
        sortReviews(1);
      }}>1 Stars: {percentage['1']}%</div>
      <div className="recommendPercentage">{recommendPercentage}% of reviews recommend this product</div>
    </div>
  );
};

export default RatingBreakdown;