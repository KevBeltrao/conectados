import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Header from '.';

describe('Header', () => {
  it('Should render Header component', () => {
  render(
    <Header />);

    expect(screen.getByText(/Header/i)).toBeInTheDocument();
  });
});
