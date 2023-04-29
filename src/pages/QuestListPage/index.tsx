import { useCallback, useState, type Dispatch, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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

    navigate('/');
  }, [selectedAnswer]);

  return (
    <QuestListPage
      quizTitle={quizTitle}
      quizQuestion={quizQuestion}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      handleSubmit={handleSubmit}
    />
  );
};

export default Wrapper;
