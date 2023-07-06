import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { productId, currentProduct, style, reviewsData, productStyles } from './overviewData.js';

import AddToCart from '../../components/overview/AddToCart.jsx';

describe('Add to Cart', function() {

  beforeEach(() => {
    render(<AddToCart style={style} />);
  });

  it('should render the AddToCart component', function() {
    var element = document.querySelector('#add-to-cart');
    expect(element).toBeInTheDocument();
  });

  it('should render the qty select input', function() {
    expect(document.querySelector('#qty-select')).toBeTruthy();
  });

  it('should render the size select input', function() {
    expect(document.querySelector('#size-select')).toBeTruthy();
  });

  it('should render the select options for a given qty', function() {
    expect(document.getElementsByTagName('option').length).toBe(13);
  });

  it('should render the add to cart button', function() {
    expect(document.querySelector('#add-to-cart-button')).toBeTruthy();
  });

  it('should render the add to cart form', function() {
    expect(document.getElementsByTagName('form')).toBeTruthy();
  });

  it('should populat the form properly', function() {
    expect(screen.getByText('7.5')).toBeInTheDocument();
    expect(screen.getByText('Add To Cart')).toBeInTheDocument();
    expect(screen.getByText('Select a size')).toBeInTheDocument();
  });

});