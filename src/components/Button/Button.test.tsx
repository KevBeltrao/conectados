import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '.';

describe('Button', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should trigger the onClick function when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    await user.click(button);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
