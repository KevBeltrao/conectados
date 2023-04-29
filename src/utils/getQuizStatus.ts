import { type QuizState } from '../globalStorage/QuizProvider';

const getQuizStatus = (
  quizState: QuizState,
): {
  progress: number;
  points: number;
} => {
  const amountOfCorrectAnswers = quizState.reduce(
    (totalAmount, quizQuestion) => {
      if (quizQuestion.correctAnswer === quizQuestion.userAnswer) {
        return totalAmount + 1;
      }

      return totalAmount;
    },
    0,
  );

  return {
    progress: amountOfCorrectAnswers / quizState.length,
    points: amountOfCorrectAnswers * 100,
  };
};

export default getQuizStatus;
