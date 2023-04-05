import { describe, it, expect, afterEach } from 'vitest';
import { type FC, useContext } from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import QuizProvider, { QuizContext } from './QuizProvider';

describe('QuizProvider', () => {
  afterEach(() => {
    cleanup();
  });

  const Child: FC = () => {
    const { quizState, quizDispatch } = useContext(QuizContext);

    return (
      <>
        <span>quizState is {String(Boolean(quizState))}</span>
        <span>quizDispatch is {String(Boolean(quizDispatch))}</span>
      </>
    );
  };

  it('Should render QuizProvider with children and be able to access state and dispatch', async () => {
    render(
      <QuizProvider>
        <Child />
      </QuizProvider>,
    );

    const quizStateChild = screen.getByText(/quizState is true/i);
    const quizDispatchChild = screen.getByText(/quizDispatch is true/i);

    expect(quizStateChild).toBeInTheDocument();
    expect(quizDispatchChild).toBeInTheDocument();
  });
});
