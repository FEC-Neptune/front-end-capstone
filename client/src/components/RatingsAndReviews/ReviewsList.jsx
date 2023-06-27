import React, { useState, useEffect } from 'react';
const axios = require('axios');
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';

import { TOKEN } from '../../../../config.js';



const ReviewsList = () => {
  const [product, setProduct] = useState(40348);
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = (username) => {
    let options = {
      headers: {
        'Authorization': TOKEN
      }
    };
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?sort=relevant&product_id=${product}`, options)
      .then((res) => {
        let reviews = res.data.results;
        console.log(reviews);
        setReviews(reviews);
        setVisibleReviews(reviews.slice(0, 2));
      })
      .catch((err => {
        throw (err);
      }));
  };

  const addReviews = () => {
    console.log('Here\'s 2 more reviews!');
  };

  return (
    <>
      {visibleReviews.map((review) =>
        <ReviewTile review={review} key={review.review_id} />
      )}
      <button onClick={addReviews}>MORE REVIEWS</button>
      <AddReview />
    </>
  );
};

export default ReviewsList;

