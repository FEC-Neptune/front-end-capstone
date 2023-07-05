import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import StyleSelector from '../../components/overview/StyleSelector.jsx';

describe('Style Selector', function() {

  it('should render the StyleSelector component', function() {
    render(<StyleSelector />);
    var element = document.querySelector('#style-selector');
    expect(element).toBeInTheDocument();
  });
});