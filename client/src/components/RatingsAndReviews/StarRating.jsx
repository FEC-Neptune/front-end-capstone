import React from 'react';
import { FaStar } from 'react-icons/fa';


const StarRating = ({ rating }) => {

  return <div id="averageRatingStars">
    {[...Array(5)].map((star) => {
      return <FaStar size={16} />;
    })}
  </div>;
};

export default StarRating;