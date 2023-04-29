import { type QuizState } from '../globalStorage/QuizProvider';

const getCurrentQuestionIndex = (quizState: QuizState): number => {
  const index = quizState.findIndex(
    ({ userAnswer, correctAnswer }) => userAnswer !== correctAnswer,
  );

  if (index === -1) return quizState.length;

  return index;
};

export default getCurrentQuestionIndex;
