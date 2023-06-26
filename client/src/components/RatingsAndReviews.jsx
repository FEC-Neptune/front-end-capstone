import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewForm from './NewReviewForm.jsx';

const RatingsAndReviews = () => {

  const getReviews = (username) => {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/:rfp2305/',
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${process.env.TOKEN}`
      }
    };
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/:rfp2305/', options)
      .then((res) => {
        return res.data;
      })
      .catch((err => {
        throw (err);
      }));
  };
  return (
    <>
      <div>Ratings and Reviews</div>
    </>
  );
};

export default RatingsAndReviews;