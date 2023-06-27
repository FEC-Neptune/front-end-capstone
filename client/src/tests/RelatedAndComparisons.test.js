import * as React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedAndComparisons from '../components/RelatedAndComparisons/RelatedAndComparisons.jsx';

describe('RelatedAndComparisonsComponent', () => {
  it('Renders component', () => {
    render(<RelatedAndComparisons />);
  });
});

