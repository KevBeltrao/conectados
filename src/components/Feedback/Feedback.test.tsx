import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import Feedback from '.';

describe('Feedback', () => {
  it('Should render Feedback success component', () => {
    render(
      <BrowserRouter>
        <Feedback type="success" isVisible setIsVisible={() => {}} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Muito bom!/i)).toBeInTheDocument();
  });

  it('Should render Feedback failure component', () => {
    render(
      <BrowserRouter>
        <Feedback type="failure" isVisible setIsVisible={() => {}} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Você está quase lá!/i)).toBeInTheDocument();
  });

  it('Should show points badge when type is success', () => {
    render(
      <BrowserRouter>
        <Feedback type="success" isVisible setIsVisible={() => {}} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/pontos/i)).toBeInTheDocument();
  });

  it("Shouldn't show points badge when type is failure", () => {
    render(
      <BrowserRouter>
        <Feedback type="failure" isVisible setIsVisible={() => {}} />
      </BrowserRouter>,
    );

    expect(screen.queryByText(/pontos/i)).not.toBeInTheDocument();
  });
});
