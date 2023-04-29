import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PointsBadge from '.';

describe('PointsBadge', () => {
  it('Should render PointsBadge component with children', () => {
    render(<PointsBadge>Example</PointsBadge>);

    expect(screen.getByText(/Example/i)).toBeInTheDocument();
  });
});
