import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { productId, currentProduct, style, reviewsData, productStyles } from './overviewData.js';

import AddToCart from '../../components/overview/AddToCart.jsx';

describe('Add to Cart', function() {

  it('should render the AddToCart component', function() {
    render(<AddToCart style={style} />);
    var element = document.querySelector('#add-to-cart');
    expect(element).toBeInTheDocument();
  });
});