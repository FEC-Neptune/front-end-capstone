import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { productId, currentProduct, style, reviewsData, productStyles } from './overviewData.js';

import ProductInformation from '../../components/overview/ProductInformation.jsx';

describe('ProductInformation', function() {

  beforeEach(() => {
    render(<ProductInformation product={currentProduct} style={style} reviewsData={reviewsData} />);
  });

  it('should render the Overview component', function() {
    var section = document.querySelector('#product-info');
    expect(section).toBeInTheDocument();
  });

  it('should render the Overview component', function() {
    var reviewsCount = document.querySelector('#product-review-count-text');
    expect(reviewsCount).toBeInTheDocument();
  });

  it('should render the product category container', function() {
    var categoryContainer = document.querySelector('#product-category-container');
    expect(categoryContainer).toBeInTheDocument();
  });

  it('should render the product name', function() {
    var name = document.querySelector('#product-name-text');
    expect(name).toBeInTheDocument();
  });

  it('should render the product category', function() {
    var category = document.querySelector('#product-category-text');
    expect(category).toBeInTheDocument();
  });

  it('should render the product price', function() {
    var price = document.querySelector('#product-default-price-text');
    expect(price).toBeInTheDocument();
  });

  it('should render the product description', function() {
    var description = document.querySelector('#product-description-text');
    expect(description).toBeInTheDocument();
  });

  it('should render social buttons', function() {
    var socialIcons = document.querySelector('#social-container');
    expect(socialIcons).toBeInTheDocument();
  });
});