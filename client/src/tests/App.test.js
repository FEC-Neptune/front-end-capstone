import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../components/App.jsx';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});