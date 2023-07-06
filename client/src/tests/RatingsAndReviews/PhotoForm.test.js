import React, { useState } from 'react';
import { render, screen, product, productName } from '@testing-library/react';
import { revsMeta } from './data.js';
import '@testing-library/jest-dom';

import PhotoForm from '../../components/RatingsAndReviews/PhotoForm.jsx';

describe('PhotoForm', () => {
  it('renders PhotoForm component', () => {
    render(<PhotoForm open={true} />);
  });
});
