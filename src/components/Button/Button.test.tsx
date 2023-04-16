import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

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

  it('Should not trigger the onClick function when button is disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>,
    );

    const button = screen.getByRole('button', { name: /click me/i });

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});
