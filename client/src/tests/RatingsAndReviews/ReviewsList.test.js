import React, {useState} from 'react';
import { render, screen } from '@testing-library/react';
import { revs, visibleRevs } from './data.js';
import '@testing-library/jest-dom';

import ReviewsList from '../../components/RatingsAndReviews/ReviewsList.jsx';

describe('ReviewsList', () => {
  it('renders ReviewsList component', () => {
    const Wrapper = () => {
      const [visibleReviews, setVisibleReviews] = useState(visibleRevs);
      return <ReviewsList visibleReviews={visibleReviews} reviews={revs} setVisibleReviews={setVisibleReviews}/>;
    };
    render(<Wrapper />);
  });
});

