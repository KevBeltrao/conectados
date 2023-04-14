import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import QuestCard from '.';

describe('QuestCard', () => {
  const targetUrl = '/quest1';

  it('Should render QuestCard component', async () => {
    render(
      <QuestCard
        status="answered"
        questName="Quest 1"
        title="Você sabe?"
        targetUrl="/quest1"
      />,
      { wrapper: BrowserRouter },
    );

    const card = screen.getByText(/Quest 1/i);

    expect(card).toBeInTheDocument();
  });

  it('Should not redirect on click when status is answered', async () => {
    const user = userEvent.setup();
    render(
      <QuestCard
        status="answered"
        questName="Quest 1"
        title="Você sabe?"
        targetUrl={targetUrl}
      />,
      { wrapper: BrowserRouter },
    );

    const card = screen.getByRole('button');

    await user.click(card);

    expect(window.location.pathname).toBe('/');
  });

  it('Should not redirect on click when status is disabled', async () => {
    const user = userEvent.setup();
    render(
      <QuestCard
        status="disabled"
        questName="Quest 1"
        title="Você sabe?"
        targetUrl={targetUrl}
      />,
      { wrapper: BrowserRouter },
    );

    const card = screen.getByRole('button');

    await user.click(card);

    expect(window.location.pathname).toBe('/');
  });

  it('Should redirect on click when status is pending', async () => {
    const user = userEvent.setup();

    render(
      <QuestCard
        status="pending"
        questName="Quest 1"
        title="Você sabe?"
        targetUrl={targetUrl}
      />,
      { wrapper: BrowserRouter },
    );

    const card = screen.getByRole('button');

    await user.click(card);

    expect(window.location.pathname).toBe(targetUrl);
  });
});
