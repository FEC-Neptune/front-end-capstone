import React, { useState, useEffect } from 'react';
import StarRating from './StarRating.jsx';
import { getAverageRating, calculateTotalReviews, calculateRatingsPercentage, getRecommendPercentage, convertRatingToStars } from '../../lib/ratingsAndReviewsHelpers.js';
import { getReviewsMeta } from '../../lib/requestHelpers.js';

const RatingBreakdown = ({ ratings, metaData, setReviews, sortReviews, activeStars, removeAllFilters }) => {

  if (metaData === null) {
    return null;
  }

  let totalReviews = calculateTotalReviews(ratings);
  let averageRatingNumber = getAverageRating(ratings, 1);
  let averageRatingStar = getAverageRating(ratings, 2);
  let percentage = calculateRatingsPercentage(ratings, totalReviews);
  let recommendPercentage = getRecommendPercentage(metaData.recommended);

  return (
    <div className="rating-breakdown">
      <div className="average-rating-heading">
        <div className="average-rating-number">{averageRatingNumber}</div>
        <div className="average-rating-stars">
          {convertRatingToStars(averageRatingStar)}
        </div>
      </div>
      <div onClick={() => {
        sortReviews(5);
      }}>
        <span className="starPercentage" >
          5 stars
          <div className="progress-bar">
            <div className="filler" style={{ width: `${percentage['5']}%` }}></div>
          </div>
          {ratings['5']}
        </span>
      </div>
      <div onClick={() => {
        sortReviews(4);
      }}><span className="starPercentage" >
          4 stars
          <div className="progress-bar">
            <div className="filler" style={{ width: `${percentage['4']}%` }}></div>
          </div>
          {ratings['4']}
        </span>
      </div>
      <div onClick={() => {
        sortReviews(3);
      }}><span className="starPercentage" >
          3 stars
          <div className="progress-bar">
            <div className="filler" style={{ width: `${percentage['3']}%` }}></div>
          </div>
          {ratings['3']}
        </span>
      </div>
      <div onClick={() => {
        sortReviews(2);
      }}><span className="starPercentage" >
          2 stars
          <div className="progress-bar">
            <div className="filler" style={{ width: `${percentage['2']}%` }}></div>
          </div>
          {ratings['2']}
        </span>
      </div>
      <div onClick={() => {
        sortReviews(1);
      }}><span className="starPercentage" >
          1 stars
          <div className="progress-bar">
            <div className="filler" style={{ width: `${percentage['1']}%` }}></div>
          </div>
          {ratings['1']}
        </span>
      </div>
      <div className="recommend-percentage">{recommendPercentage}% of reviews recommend this product</div>
      {activeStars.length > 0 && <div className="filter-display">
        {activeStars.map((star, i) => {
          return <div className="filter-message" key={i}>Showing {star} star reviews</div>;
        })}
        <button className="remove-filter-button" onClick={removeAllFilters}>Remove all filters</button>
      </div>}
    </div>
  );
};

export default RatingBreakdown;