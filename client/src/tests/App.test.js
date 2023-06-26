import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../components/App.jsx';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    screen.debug();
  });
  it('renders the header text', () => {
    render(<App />);
    screen.getByText(/Hello/);
  });
  it('renders the ratings text', () => {
    render(<App />);
    screen.getByText('Ratings and Reviews');
  });

});