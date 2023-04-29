import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Feedback from '.';

describe('Feedback', () => {
  it('Should render Feedback component', () => {
    render(<Feedback title="title" content="example" />);

    expect(screen.getByText(/example/i)).toBeInTheDocument();
  });
});
