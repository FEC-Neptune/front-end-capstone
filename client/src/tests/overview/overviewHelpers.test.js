import {findDefaultStyle, isDefaultStyle, createSubarray, createArrayFromInt } from '../../lib/overviewHelpers.js';
import '@testing-library/jest-dom';
import { productId, currentProduct, style, reviewsData, productStyles, noDefaultStyles } from './overviewData.js';

describe('findDefaultStyle', function() {

  it('should identify the default style', function() {
    var defaultStyle = findDefaultStyle(productStyles);
    expect(defaultStyle.style_id).toBe(240525);
  });

  it('should return an empty object if input array has no length', function() {
    expect(JSON.stringify(findDefaultStyle([]))).toBe(JSON.stringify({}));
  });

  it('should return an empty object if input array has no length', function() {
    expect(findDefaultStyle(noDefaultStyles).style_id).toBe(240525);
  });
});

describe('isDefaultStyle', function() {
  it('should identify the default style', function() {
    expect(isDefaultStyle(style)).toBe(true);
  });
});

describe('createArrayFromInt', function() {

  it('should return an array that has a length of X - 1 when passed a valid integer of X', function() {
    expect(createArrayFromInt(5).length).toBe(4);
  });

  it('should return an empty array if input is not a number', function() {
    expect(createArrayFromInt('a').length).toBe(0);
  });

  it('should return an array with length of 15 if input greater than 15', function() {
    expect(createArrayFromInt(25).length).toBe(15);
  });
});

describe('createSubarray', function() {

  it('should create an array with 4 subarrays when passed an input array with length of 8 and n = 2', function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8];
    var n = 2;
    expect(createSubarray(array, n).length).toBe(4);
  });
});
