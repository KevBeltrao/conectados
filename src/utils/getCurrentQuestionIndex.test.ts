import { describe, it } from 'vitest';

import { type QuizState } from '../globalStorage/QuizProvider';

import getCurrentQuestionIndex from './getCurrentQuestionIndex';

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
      correctAnswer: 1,
      question: 'question 2',
      userAnswer: 1,
      previewName: 'question 2',
    },
    {
      answers: ['q3o1', 'q3o2'],
      correctAnswer: 1,
      question: 'question 3',
      userAnswer: 1,
      previewName: 'question 3',
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
      correctAnswer: 1,
      question: 'question 2',
      userAnswer: 1,
      previewName: 'question 2',
    },
    {
      answers: ['q3o1', 'q3o2'],
      correctAnswer: 0,
      question: 'question 3',
      userAnswer: 1,
      previewName: 'question 3',
    },
    {
      answers: ['q4o1', 'q4o2'],
      correctAnswer: 1,
      question: 'question 3',
      userAnswer: null,
      previewName: 'question 3',
    },
  ];

  const quizExample3: QuizState = [
    {
      answers: ['q1o1', 'q1o2'],
      correctAnswer: 0,
      question: 'question 1',
      userAnswer: 0,
      previewName: 'question 1',
    },
    {
      answers: ['q2o1', 'q2o2'],
      correctAnswer: 1,
      question: 'question 2',
      userAnswer: 1,
      previewName: 'question 2',
    },
    {
      answers: ['q3o1', 'q3o2'],
      correctAnswer: 0,
      question: 'question 3',
      userAnswer: null,
      previewName: 'question 3',
    },
    {
      answers: ['q4o1', 'q4o2'],
      correctAnswer: 1,
      question: 'question 3',
      userAnswer: null,
      previewName: 'question 3',
    },
  ];

  it('Should return null on a form completed', () => {
    const index = getCurrentQuestionIndex(quizExample1);

    expect(index).toBe(quizExample1.length);
  });

  it('Should return index of first wrong answer', () => {
    const index = getCurrentQuestionIndex(quizExample2);

    expect(index).toBe(2);
  });

  it('Should return first null in case all answers are correct', () => {
    const index = getCurrentQuestionIndex(quizExample3);

    expect(index).toBe(2);
  });
});
