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
// get product styles
// get product reviews meta

export default fetchProducts;