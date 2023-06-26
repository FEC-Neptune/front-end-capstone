import React, {useState, useEffect} from 'react';
import ReviewTile from './ReviewTile.jsx';
const axios = require('axios');
require('dotenv').config();


const ReviewsList = () => {
  const [reviewsList, setReviewsList] = useState([]);
  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = (username) => {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/',
      headers: {
        'Authorization': process.env.TOKEN
      }
    };
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/', options)
      .then((res) => {
        console.log('DATA', res);
        setReviewsList(res.body);
      })
      .catch((err => {
        throw (err);
      }));
  };

  return (
    <>
      {reviewsList.map((review) =>
        <ReviewTile review={review} />
      )}
    </>
  );
};

export default ReviewsList;