const { TOKEN } = require('../../../config.js');
const axios = require('axios');
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