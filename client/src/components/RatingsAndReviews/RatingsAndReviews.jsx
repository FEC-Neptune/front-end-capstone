import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewForm from './NewReviewForm.jsx';
import AddReview from './AddReview.jsx';
import { TOKEN } from '../../../../config.js';
const axios = require('axios');

const RatingsAndReviews = () => {

  const [product, setProduct] = useState(40347);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {

    let options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?sort=relevant&product_id=${product}`,
      headers: { 'Authorization': TOKEN }
    };

    return axios(options)
      .then((res) => {
        let reviews = res.data.results;
        console.log(reviews);
        setReviews(reviews);
      })
      .catch((err => {
        throw (err);
      }));

  };

  return (
    <>
      <h2>Ratings and Reviews</h2>

      {reviews.length > 0 &&
        <div>
          <RatingBreakdown reviews={reviews} />
          <ReviewsList reviews={reviews} getReviews={getReviews} product={product} />
        </div>}
      <AddReview />
    </>
  );
};

export default RatingsAndReviews;