import React, { useState, useEffect } from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { productId, currentProduct, style, reviewsData, productStyles } from './overviewData.js';
import { createSubarray } from '../../lib/overviewHelpers.js';

import StyleSelector from '../../components/overview/StyleSelector.jsx';

describe('Style Selector', function() {

  var productStylesArray;

  beforeEach(() => {
    render(<StyleSelector productStyles={productStyles} style={style} />);

  });

  it('should render the StyleSelector component', function() {
    var element = document.querySelector('#style-selector');
    expect(element).toBeInTheDocument();
  });

  it('should render the styles container', function() {
    var container = document.getElementsByClassName('style-container');
    expect(container).toBeTruthy();
  });

  it('should render the styles thumbnails', function() {
    var styleThumbnail = document.querySelector('.style-thumbnail');
    expect(styleThumbnail).toBeTruthy();
  });
});