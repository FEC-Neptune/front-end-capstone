import { TOKEN } from '../../../config.js';

// get product
// get product styles
// get product reviews meta
module.exports = {

  getReviews: (id) => {
    var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?sort=relevant&product_id=' + id;

    axios({
      method: 'get',
      url: url,
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((res) => {
        let reviews = res.data.results;
        console.log(reviews);
      })
      .catch((err => {
        throw (err);
      }));
  },
  getReviewsMeta: (id) => {
    var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=' + id;

    axios({
      method: 'get',
      url: url,
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err => {
        throw (err);
      }));
  }
};