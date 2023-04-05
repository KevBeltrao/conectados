import { describe, it, expect, vi } from 'vitest';

import { answer, init } from '../quizReducers';
import { type QuizState } from '../quizTypes';

describe('quizReducers', () => {
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

  it('Should create quiz and call localStorage.setItem on INIT with no localStorage', async () => {
    const localStorageGetItem = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => null);

    const localStorageSetItem = vi.spyOn(Storage.prototype, 'setItem');

    const JSONParse = vi.spyOn(JSON, 'parse').mockImplementation(() => ({
      questions: [
        {
          answers: ['a', 'b', 'c'],
          correctAnswer: 0,
          question: 'question 1?',
        },
        {
          answers: ['d', 'e', 'f'],
          correctAnswer: 1,
          question: 'question 2?',
        },
      ],
    }));

    init();

    expect(localStorageGetItem).toHaveBeenCalledOnce();
    expect(JSONParse).toHaveBeenCalledOnce();
    expect(localStorageSetItem).toHaveBeenCalledOnce();
  });

  it('Should create quiz on INIT according to localStorage', async () => {
    const stringifiedQuiz = JSON.stringify(fakeQuiz);

    const localStorageGetItem = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => stringifiedQuiz);

    const JSONParse = vi.spyOn(JSON, 'parse');

    init();

    expect(localStorageGetItem).toHaveBeenCalledOnce();
    expect(JSONParse).toHaveBeenCalledWith(stringifiedQuiz);
  });

  it('Should update form and call localStorage.setItem on ANSWER', async () => {
    const localStorageSetItem = vi.spyOn(Storage.prototype, 'setItem');

    const updatedQuiz = answer(fakeQuiz, { index: 1, answer: 1 });

    expect(localStorageSetItem).toHaveBeenCalledOnce();
    expect(updatedQuiz).toEqual([
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
        userAnswer: 1,
      },
    ]);
  });
});
