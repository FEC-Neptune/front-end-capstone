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