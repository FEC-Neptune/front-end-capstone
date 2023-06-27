import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
const axios = require('axios');
// import {token} from '..../config.js';

const dummyData = {
  'product': '2',
  'page': 0,
  'count': 2,
  'results': [
    {
      'review_id': 5,
      'rating': 3,
      'summary': 'I\'m enjoying wearing these shades',
      'recommend': false,
      'response': null,
      'body': 'Comfortable and practical.',
      'date': '2019-04-14T00:00:00.000Z',
      'reviewer_name': 'shortandsweeet',
      'helpfulness': 5,
      'photos': [{
        'id': 1,
        'url': 'urlplaceholder/review_5_photo_number_1.jpg'
      },
      {
        'id': 2,
        'url': 'urlplaceholder/review_5_photo_number_2.jpg'
      },
      ]
    },
    {
      'review_id': 3,
      'rating': 4,
      'summary': 'I am liking these glasses',
      'recommend': false,
      'response': 'Glad you\'re enjoying the product!',
      'body': 'They are very dark. But that\'s good because I\'m in very sunny spots',
      'date': '2019-06-23T00:00:00.000Z',
      'reviewer_name': 'bigbrotherbenjamin',
      'helpfulness': 5,
      'photos': [],
    },
  ]
};

const ReviewsList = () => {
  const [productData, setProductData] = useState(dummyData);

  // useEffect(() => {
  //   getReviews();
  // }, []);

  const getReviews = (username) => {
    let options = {
      headers: {
        'Authorization': process.env.TOKEN
      }
    };
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', options)
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch((err => {
        throw (err);
      }));
  };

  return (
    <>
      {productData.results.map((review) =>
        <ReviewTile review={review} key={review.review_id} />
      )}
    </>
  );
};

export default ReviewsList;

