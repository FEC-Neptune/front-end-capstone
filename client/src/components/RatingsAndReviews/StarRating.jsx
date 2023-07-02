import React from 'react';

const StarRating = ({ rating }) => {
  const renderStar = (starValue, filled) => {
    const starClassName = filled ? 'star filled' : 'star outlined';
    return <span className={starClassName}>&#9733;</span>;
  };

  const renderRating = () => {
    const fullStars = Math.floor(rating);
    const remaining = rating - fullStars;
    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(renderStar(i, true));
    }

    // Render remaining stars (up to a quarter star)
    if (remaining > 0 && remaining <= 0.25) {
      stars.push(renderStar(fullStars, true));
    } else if (remaining > 0.25 && remaining <= 0.75) {
      stars.push(renderStar(fullStars, true));
      stars.push(renderStar(fullStars, false));
    } else if (remaining > 0.75 && remaining < 1) {
      stars.push(renderStar(fullStars, true));
      stars.push(renderStar(fullStars, false));
      stars.push(renderStar(fullStars, true));
    }

    return stars;
  };

  return <div className="star-rating">{renderRating()}</div>;
};

export default StarRating;