import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import QuestLayout from '.';

describe('QuestLayout', () => {
  it('Should render QuestLayout with correct title, question and children', () => {
    render(
      <BrowserRouter>
        <QuestLayout onSubmit={() => {}} question="Question?" title="Title">
          {<div>child</div>}
        </QuestLayout>
        ,
      </BrowserRouter>,
    );

    expect(screen.getByText(/Question?/i)).toBeInTheDocument();
    expect(screen.getByText(/title?/i)).toBeInTheDocument();
    expect(screen.getByText(/child?/i)).toBeInTheDocument();
  });

  it('Should call the submit function when the button is clicked', async () => {
    const user = userEvent.setup();

    const submitMock = vi.fn();

    render(
      <BrowserRouter>
        <QuestLayout onSubmit={submitMock} question="Question?" title="Title">
          {<div>child</div>}
        </QuestLayout>
        ,
      </BrowserRouter>,
    );

    const submitButton = screen.getByText(/Enviar/i);

    await user.click(submitButton);

    expect(submitMock).toHaveBeenCalledOnce();
  });

  it('Should NOT call the submit function when button is disabled', async () => {
    const user = userEvent.setup();

    const submitMock = vi.fn();

    render(
      <BrowserRouter>
        <QuestLayout
          onSubmit={submitMock}
          question="Question?"
          title="Title"
          submitDisabled
        >
          {<div>child</div>}
        </QuestLayout>
        ,
      </BrowserRouter>,
    );

    const submitButton = screen.getByText(/Enviar/i);

    await user.click(submitButton);

    expect(submitMock).not.toHaveBeenCalled();
  });
});
