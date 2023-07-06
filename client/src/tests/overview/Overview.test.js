import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { productId, currentProduct, reviewsData, productStyles } from './overviewData.js';

import Overview from '../../components/overview/Overview.jsx';

describe('Overview', function() {

  it('should render the Overview component', function() {
    render(<Overview productId={productId}/>);
    var section = document.querySelector('#overview');
    expect(section).toBeInTheDocument();
  });
});