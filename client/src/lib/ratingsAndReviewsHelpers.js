import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export const getAverageRating = (ratingsObj, decimalPlace) => {
  let totalRatings = 0;
  let totalScore = 0;

  Object.keys(ratingsObj).forEach((score) => {
    totalRatings += parseInt(ratingsObj[score]);
    totalScore += ratingsObj[score] * score;
  });

  let avgRating = totalScore / totalRatings;

  avgRating = (Math.round(avgRating * 4) / 4).toFixed(decimalPlace);
  return avgRating;
};

export const calculateTotalReviews = (ratingsObj) => {
  var sum = 0;
  for (var key in ratingsObj) {
    sum += parseInt(ratingsObj[key]);
  }
  return sum;
};

export const calculateRatingsPercentage = (ratingsObj, totalReviews) => {
  var result = {};
  for (var key in ratingsObj) {
    result[key] = Math.round(ratingsObj[key] * 100 / totalReviews);
  }
  return result;
};

export const getRecommendPercentage = (recommendObj) => {
  var sum = 0;
  var recs = parseInt(recommendObj.true);
  sum += recs;
  sum += parseInt(recommendObj.false);
  return Math.round((recs * 100) / sum);
};

export const convertRatingToStars = (rating) => {
  let fullStars = Math.floor(rating);
  let remainder = 5 - rating;
  let emptyStars = Math.floor(remainder);
  let partial = remainder - emptyStars;

  const renderStar = (type, index) =>{
    if (type === 'full') {
      return <FaStar size={20} key={index}/>;
    } else if (type === 'half') {
      return <FaStarHalfAlt size={20} key={index}/>;
    } else if (type === 'empty') {
      return <FaRegStar size={20} key={index}/>;
    }
  };

  let stars = [];

  for (let i = 0; i < fullStars; i ++) {
    let index = i;
    stars.push(renderStar('full', index));
  }
  if (partial) {
    stars.push(renderStar('half', 10));
  }
  for (let j = 0; j < emptyStars; j ++) {
    let index = j + 5;
    stars.push(renderStar('empty', index));
  }
  return stars;
};