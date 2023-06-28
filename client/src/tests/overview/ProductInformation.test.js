import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import ProductInformation from '../../components/overview/ProductInformation.jsx';

describe('ProductInformation', function() {

  it('should render the Overview component', function() {
    render(<ProductInformation />);
    var section = document.querySelector('#product-info');
    expect(section).toBeInTheDocument();
  });
});