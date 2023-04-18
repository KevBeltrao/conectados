import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import Home from '.';

describe('Home', () => {
  it('Should render Home component', () => {
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByText(/É hora do jogo!/i)).toBeInTheDocument();
  });
});
