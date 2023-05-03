import {
  type QuizActionPayload,
  type QuizQuestion,
  type QuizState,
} from './quizTypes';

export const init = (): QuizState => {
  const localStorageQuiz = localStorage.getItem('quiz');
  const { questions: envQuiz } = JSON.parse(import.meta.env.VITE_QUIZ) as {
    questions: Array<Omit<QuizQuestion, 'userAnswer'>>;
  };

  if (localStorageQuiz === null) {
    const quiz = envQuiz.map((question) => ({
      ...question,
      userAnswer: null,
    }));
    localStorage.setItem('quiz', JSON.stringify(quiz));
    return quiz;
  }

  return JSON.parse(localStorageQuiz) as QuizState;
};
export const reset = (): QuizState => {
  const { questions: envQuiz } = JSON.parse(import.meta.env.VITE_QUIZ) as {
    questions: Array<Omit<QuizQuestion, 'userAnswer'>>;
  };

  const quiz = envQuiz.map((question) => ({
    ...question,
    userAnswer: null,
  }));
  localStorage.setItem('quiz', JSON.stringify(quiz));
  return quiz;
};

export const answer = (
  state: QuizState,
  payload?: QuizActionPayload,
): QuizState => {
  const updatedQuiz = state.map((question, index) => {
    if (index === payload?.index) {
      return {
        ...question,
        userAnswer: payload.answer ?? null,
      };
    }

    return question;
  });

  localStorage.setItem('quiz', JSON.stringify(updatedQuiz));

  return updatedQuiz;
};
