import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import AddToCart from '../../components/overview/AddToCart.jsx';

describe('Add to Cart', function() {

  it('should render the AddToCart component', function() {
    render(<AddToCart />);
    var element = document.querySelector('#add-to-cart');
    expect(element).toBeInTheDocument();
  });
});