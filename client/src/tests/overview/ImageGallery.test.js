import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import ImageGallery from '../../components/overview/ImageGalery.jsx';

// Tests to Add
// 1) Renders image
// 2) No error w/o image

describe('ImageGallery', function() {

  it('should render the ImageGallery component', function() {
    render(<ImageGallery />);
  });
});