import React, { useState, useEffect } from 'react';
import StarRating from './StarRating.jsx';
import { getAverageRating, calculateTotalReviews, calculateRatingsPercentage, getRecommendPercentage, convertRatingToStars } from '../../lib/ratingsAndReviewsHelpers.js';
import { getReviewsMeta } from '../../lib/requestHelpers.js';



const RatingBreakdown = ({ ratings, metaData, setReviews, sortReviews, activeStars, removeAllFilters }) => {

  if (metaData === null) {
    return null;
  }

  let totalReviews = calculateTotalReviews(ratings);
  let averageRating = getAverageRating(ratings, 1);
  let percentage = calculateRatingsPercentage(ratings, totalReviews);
  let recommendPercentage = getRecommendPercentage(metaData.recommended);


  return (
    <div className="breakdown">
      <div className="average-rating-heading">
        <div className="average-rating-number">{averageRating}</div>
        <div className="average-rating-stars">
          {convertRatingToStars(averageRating)}
        </div>
      </div>
      <div onClick={() => {
        sortReviews(5);
      }}><span className="starPercentage" >5 Stars: {percentage['5']}%</span></div>
      <div onClick={() => {
        sortReviews(4);
      }}><span className="starPercentage" >4 Stars: {percentage['4']}%</span></div>
      <div onClick={() => {
        sortReviews(3);
      }}><span className="starPercentage">3 Stars: {percentage['3']}%</span></div>
      <div onClick={() => {
        sortReviews(2);
      }}><span className="starPercentage">2 Stars: {percentage['2']}%</span></div>
      <div onClick={() => {
        sortReviews(1);
      }}><span className="starPercentage">1 Stars: {percentage['1']}%</span></div>
      <div className="recommendPercentage">{recommendPercentage}% of reviews recommend this product</div>

      {activeStars.length ? <div id="filterDisplay">
        {activeStars.map((star, i) => {
          return <div key={i}>Showing {star} star reviews</div>;
        })}
        <button onClick={removeAllFilters}>Remove all filters</button>
      </div> : null}

    </div>
  );
};

export default RatingBreakdown;