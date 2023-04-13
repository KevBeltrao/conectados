import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '.';

describe('Home', () => {
  it('Should render Home component', () => {
    render(<Home />);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
