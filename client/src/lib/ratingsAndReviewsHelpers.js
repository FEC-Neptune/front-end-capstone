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

export const characteristicsKey = {
  Size: {id: 135232, options: ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'A size too wide']},
  Width: {id: 135233, options: ['Too narrow', 'Slightly Narrow', 'Perfect', 'Slightly wide', 'Too wide']},
  Comfort: {id: 135221, options: ['Uncomfortable', 'Slightly comfortable', 'Ok', 'Comfortable', 'Perfect']},
  Quality: {id: 135222, options: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']},
  Length: {id: 135220, options: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']},
  Fit: {id: 135219, options: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']}
};

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};