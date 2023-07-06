import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { productId, currentProduct, style, reviewsData, productStyles } from './overviewData.js';

import ImageGallery from '../../components/overview/ImageGallery.jsx';

// Tests to Add
// 1) Renders image
// 2) No error w/o image

describe('ImageGallery', function() {

  const activeImageIndex = 0;
  const expandedView = false;

  it('should render the ImageGallery component', function() {
    render(<ImageGallery product={productId} style={style} activeImageIndex={activeImageIndex} expandedView={expandedView} />);
  });
});