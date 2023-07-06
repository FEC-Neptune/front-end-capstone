import { fetchProducts, getReviews, getReviewsMeta, addReview, addToCart } from '../lib/requestHelpers.js';

describe('fetchProducts', function() {

  it('should return a response of products', function() {
    fetchProducts()
      .then((res) => {
        expect(res.length).toBeTruthy();
      });
  });
});

describe('getReviews', function() {

  it('should return a response of reviews', function() {


    getReviews(40344)
      .then((res) => {
        expect(res).toBeTruthy();
      });
  });
});

describe('getReviewsMeta', function() {

  it('should return a response of meta data of reviews', function() {


    getReviewsMeta(40344)
      .then((res) => {
        expect(res).toBeTruthy();
      });
  });
});

describe('addReview', function() {

  const requestBody = {
    'product_id': 40344,
    'rating': 'good',
    'summary': 'summary',
    'body': 'body',
    'recommend': 'recommend',
    'name': 'nickname',
    'email': 'email',
    'photos': [],
    'characteristics': 'characteristics'
  };

  it('should add a review', function() {

    addReview(requestBody)
      .then((res) => {
        expect(res).toBeTruthy();
      });
  });
});

describe('addToCart', function() {

  it('should add items to cart', function() {

    addToCart(40344, 1)
      .then((res) => {
        expect(res).toBeTruthy();
      });
  });
});
