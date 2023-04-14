import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import QuestCard from '.';

describe('QuestCard', () => {
  const questCardProps = {
    questName: 'Quest 1',
    title: 'Você sabe?',
    targetUrl: '/quest1',
  };

  it('Should render QuestCard component with title and questName', async () => {
    render(<QuestCard {...questCardProps} status="answered" />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(questCardProps.questName)).toBeInTheDocument();
    expect(screen.getByText(questCardProps.title)).toBeInTheDocument();
  });

  it('Should not redirect on click when status is answered', async () => {
    const user = userEvent.setup();
    render(<QuestCard {...questCardProps} status="answered" />, {
      wrapper: BrowserRouter,
    });

    const card = screen.getByRole('button');

    await user.click(card);

    expect(window.location.pathname).toBe('/');
  });

  it('Should not redirect on click when status is disabled', async () => {
    const user = userEvent.setup();
    render(<QuestCard {...questCardProps} status="disabled" />, {
      wrapper: BrowserRouter,
    });

    const card = screen.getByRole('button');

    await user.click(card);

    expect(window.location.pathname).toBe('/');
  });

  it('Should redirect on click when status is pending', async () => {
    const user = userEvent.setup();

    render(<QuestCard status="pending" {...questCardProps} />, {
      wrapper: BrowserRouter,
    });

    const card = screen.getByRole('button');

    await user.click(card);

    expect(window.location.pathname).toBe(questCardProps.targetUrl);
  });
});
