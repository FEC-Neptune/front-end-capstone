
import { TOKEN } from '../../../config.js';
import axios from 'axios';

//API Call that takes in optional id (INT) and category ('styles' or 'related')
//returns full product list array if no params
//returns single product object if only id
//returns styles or related products array if id and category
export const fetchProducts = function (id, category) {
  let options = {
    headers: {
      'Authorization': TOKEN
    }
  };
  id = id ? id + '/' : '';
  category = category ? category : '';
  return axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}${category}`, options)
    .then((res) => (res.data))
    .catch((err => {
      throw (err);
    }));
};

export const getReviews = (id, sortMethod = 'relevant') => {
  var url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?page=1&count=200&sort=${sortMethod}&product_id=${id}`;

  return axios({
    method: 'get',
    url: url,
    headers: {
      'Authorization': TOKEN
    }
  })
    .then((res) => {
      let reviews = res.data.results;
      return reviews;
    })
    .catch((err => {
      throw (err);
    }));
};

export const getReviewsMeta = (id) => {
  var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=' + id;

  return axios({
    method: 'get',
    url: url,
    headers: {
      'Authorization': TOKEN
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err => {
      throw (err);
    }));
};

export const addReview = (requestBody) => {
  console.log('POSTING');
  var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/';

  return axios({
    method: 'post',
    url: url,
    headers: {
      'Authorization': TOKEN
    },
    data: requestBody
  })
    .then((res) => {
      return res;
    })
    .catch((err => {
      throw (err);
    }));
};

export const addToCart = (sku, count) => {
  var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart';

  return axios({
    method: 'post',
    url: url,
    headers: {
      'Authorization': TOKEN
    },
    data: {
      'sku_id': sku,
      'count': count
    }
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

