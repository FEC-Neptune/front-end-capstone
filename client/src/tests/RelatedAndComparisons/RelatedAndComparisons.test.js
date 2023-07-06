import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedAndComparisons from '../../components/RelatedAndComparisons/RelatedAndComparisons.jsx';

describe('RelatedAndComparisonsComponent', () => {
  it('Renders component', () => {
    render(<RelatedAndComparisons />);
    let element = document.querySelector('#widget');
    let relatedCarousel = document.querySelector('#related-carousel');
    expect(relatedCarousel).toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });
});





