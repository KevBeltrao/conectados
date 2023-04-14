import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProgressBar from '.';

describe('ProgressBar', () => {
  it('Should render ProgressBar component', () => {
    render(<ProgressBar progress={1} />);

    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
  });
});
