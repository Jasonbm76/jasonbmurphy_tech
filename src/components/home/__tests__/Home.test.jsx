import { afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import Home from '../Home';

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
    const homeElement = screen.getByText(/About this site/i);
    screen.debug();
    //expect(homeElement).toBeInTheDocument();
  });
});
