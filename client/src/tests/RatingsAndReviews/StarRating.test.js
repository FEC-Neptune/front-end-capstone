import React, {useState} from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import StarRating from '../../components/RatingsAndReviews/StarRating.jsx';

describe('StarRating', () => {
  it('renders StarRating component', () => {
    const Wrapper = () => {
      const [rating, setRating] = useState(0);
      return <StarRating />;
    };
    render(<Wrapper />);
  });
});

