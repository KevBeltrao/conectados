import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import QuestOptionButton from '.';

describe('QuestOptionButton', () => {
  it('Should render QuestOptionButton with correct children content', () => {
    const children = 'example';

    render(<QuestOptionButton>{children}</QuestOptionButton>);

    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('Should call callback function when clicked', async () => {
    const user = userEvent.setup();
    const mock = vi.fn();

    render(<QuestOptionButton onClick={mock} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mock).toHaveBeenCalledOnce();
  });

  it('Should have active class when isActive is true', () => {
    render(<QuestOptionButton isActive />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('active');
  });
});
