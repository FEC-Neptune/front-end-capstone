import * as React from 'react';
import { render, screen } from '@testing-library/react';

import RatingsAndReviews from '../../components/RatingsAndReviews/RatingsAndReviews.jsx';

describe.only('RatingsAndReviews', () => {
  it('renders RatingsAndReviews component', () => {
    render(<RatingsAndReviews />);
  });
});