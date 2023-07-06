import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { revs } from './data.js';

import ReviewTile from '../../components/RatingsAndReviews/ReviewTile.jsx';

describe('ReviewTile', () => {
  it('renders ReviewTile component', () => {
    render(<ReviewTile review={revs[0]} />);
  });
});

