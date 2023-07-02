import React, { useState, useEffect } from 'react';
import { getAverageRating, calculateTotalReviews, calculateRatingsPercentage, getRecommendPercentage } from '../../lib/ratingsAndReviewsHelpers.js';
import { getReviewsMeta } from '../../lib/requestHelpers.js';

const RatingBreakdown = ({ metaData, reveiws, setReviews, sortReviews, activeStars, removeAllFilters }) => {

  const [filterActive, setFilterActive] = useState(false);

  let ratings = metaData.ratings;
  let totalReviews = calculateTotalReviews(ratings);
  let averageRating = getAverageRating(ratings, 1);
  let percentage = calculateRatingsPercentage(ratings, totalReviews);
  let recommendPercentage = getRecommendPercentage(metaData.recommended);




  return (
    <div id="breakdown">
      <div id="averageRating">{averageRating}</div>
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
        {activeStars.map((star) =>{
          return <div>Showing {star} star reviews</div>;
        })}
        <button onClick={removeAllFilters}>Remove all filters</button>
      </div> : null}

    </div>
  );
};

export default RatingBreakdown;