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