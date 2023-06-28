import { TOKEN } from '../../../config.js';
import axios from 'axios';

//API Call that takes in optional id (INT) and category ('styles' or 'related')
//returns full product list array if no params
//returns single product object if only id
//returns styles or related products array if id and category
const fetchProducts = function (id, category) {
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

// get product
// get product styles
// get product reviews meta
module.exports = {

  getReviews: (id) => {
    var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?sort=relevant&product_id=' + id;

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
  },
  getReviewsMeta: (id) => {
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
  }
};

export default fetchProducts;