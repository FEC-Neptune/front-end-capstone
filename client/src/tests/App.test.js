import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../components/App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
  });
});