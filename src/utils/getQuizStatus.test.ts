import { describe, it } from 'vitest';

import { type QuizState } from '../globalStorage/QuizProvider';

import getQuizStatus from './getQuizStatus';

describe('getQuizStatus', () => {
  const quizExample1: QuizState = [
    {
      answers: ['q1o1', 'q1o2'],
      correctAnswer: 0,
      question: 'question 1',
      userAnswer: 0,
      previewName: 'question 1',
    },
    {
      answers: ['q2o1', 'q2o2'],
      correctAnswer: 0,
      question: 'question 2',
      userAnswer: 1,
      previewName: 'question 1',
    },
    {
      answers: ['q3o1', 'q3o2'],
      correctAnswer: 1,
      question: 'question 3',
      userAnswer: 1,
      previewName: 'question 1',
    },
  ];

  const quizExample2: QuizState = [
    {
      answers: ['q1o1', 'q1o2'],
      correctAnswer: 0,
      question: 'question 1',
      userAnswer: 0,
      previewName: 'question 1',
    },
    {
      answers: ['q2o1', 'q2o2'],
      correctAnswer: 0,
      question: 'question 2',
      userAnswer: 1,
      previewName: 'question 1',
    },
    {
      answers: ['q3o1', 'q3o2'],
      correctAnswer: 1,
      question: 'question 3',
      userAnswer: 1,
      previewName: 'question 1',
    },
    {
      answers: ['q4o1', 'q4o2'],
      correctAnswer: 1,
      question: 'question 3',
      userAnswer: null,
      previewName: 'question 1',
    },
  ];

  it('Should calculate points and progress correctly on a quiz completed', () => {
    const { points, progress } = getQuizStatus(quizExample1);

    expect(points).toBe(200);
    expect(progress.toFixed(3)).toBe('0.667');
  });

  it('Should calculate points and progress correctly on a quiz in progress', () => {
    const { points, progress } = getQuizStatus(quizExample2);

    expect(points).toBe(200);
    expect(progress).toBe(0.5);
  });
});
