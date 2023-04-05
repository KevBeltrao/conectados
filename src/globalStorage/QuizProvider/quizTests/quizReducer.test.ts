import { describe, it, expect, vi } from 'vitest';

import quizReducer from '../quizReducer';
import * as quizReducers from '../quizReducers';
import { type QuizState } from '../quizTypes';

describe('quizReducer', () => {
  const fakeQuiz: QuizState = [
    {
      answers: ['a', 'b', 'c'],
      correctAnswer: 0,
      question: 'question 1?',
      userAnswer: null,
    },
    {
      answers: ['d', 'e', 'f'],
      correctAnswer: 1,
      question: 'question 2?',
      userAnswer: null,
    },
  ];

  it('Should call the init reducer on dispatch type INIT', () => {
    const initMock = vi.spyOn(quizReducers, 'init');

    quizReducer(fakeQuiz, { type: 'INIT' });
    expect(initMock).toHaveBeenCalledOnce();
  });

  it('Should call the answer reducer on dispatch type ANSWER', () => {
    const answerMock = vi.spyOn(quizReducers, 'answer');

    quizReducer(fakeQuiz, {
      type: 'ANSWER',
      payload: { index: 0, answer: 0 },
    });
    expect(answerMock).toHaveBeenCalledOnce();
  });
});
