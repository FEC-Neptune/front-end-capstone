import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import ImageZoom from '../../components/overview/ImageZoom.jsx';

// Tests to Add
// 1) Renders image
// 2) No error w/o image

describe('ImageZoom', function() {

  it('should render the ImageZoom component', function() {
    render(<ImageZoom />);
  });
});