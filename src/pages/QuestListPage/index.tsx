import { useCallback, useState, type Dispatch, type FC } from 'react';

import {
  type QuizAction,
  type QuizQuestion,
} from '../../globalStorage/QuizProvider';

import QuestListPage from './QuestListPage';

interface WrapperTypes {
  quizQuestion: QuizQuestion;
  quizTitle: string;
  quizDispatch: Dispatch<QuizAction>;
  questionIndex: number;
}

const Wrapper: FC<WrapperTypes> = ({
  quizTitle,
  quizQuestion,
  quizDispatch,
  questionIndex,
}) => {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(
    quizQuestion.userAnswer,
  );

  const handleSubmit = useCallback((): void => {
    if (selectedAnswer === null) return;

    quizDispatch({
      type: 'ANSWER',
      payload: {
        index: questionIndex,
        answer: selectedAnswer,
      },
    });

    setIsFeedbackVisible(true);
  }, [selectedAnswer]);

  return (
    <QuestListPage
      quizTitle={quizTitle}
      quizQuestion={quizQuestion}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      handleSubmit={handleSubmit}
      isFeedbackVisible={isFeedbackVisible}
      setIsFeedbackVisible={setIsFeedbackVisible}
    />
  );
};

export default Wrapper;
