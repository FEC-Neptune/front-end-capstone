import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAverageRating, convertRatingToStars } from '../../lib/ratingsAndReviewsHelpers.js';
import { TOKEN } from '../../../../config.js';

const Stars = ({ productID }) => {
  const [stars, setStars] = useState('');

  useEffect(() => {
    const fetchRating = () => {
      let options = {
        headers: {
          'Authorization': TOKEN
        }
      };
      axios
        .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productID}`, options)
        .then(res => {
          const rating = convertRatingToStars(getAverageRating(res.data.ratings, 2));
          setStars(rating);
        })
        .catch(err => console.log(err));
    };

    fetchRating();
  }, [productID]);

  return <div className='star-rating'>{stars ? stars : 'Loading...'}</div>;
};

export default Stars;