import { useCallback, useContext, useMemo, type FC } from 'react';

import { QuizContext } from '../../globalStorage/QuizProvider';
import getCurrentQuestionIndex from '../../utils/getCurrentQuestionIndex';
import getQuizStatus from '../../utils/getQuizStatus';

import Home from './Home';

interface WrapperTypes {
  initial?: number;
}

const Wrapper: FC<WrapperTypes> = () => {
  const { quizState } = useContext(QuizContext);

  const { progress, points, currentQuestionIndex } = useMemo(() => {
    return {
      ...getQuizStatus(quizState),
      currentQuestionIndex: getCurrentQuestionIndex(quizState),
    };
  }, [quizState]);

  const getStatus = useCallback(
    (questionIndex: number): 'answered' | 'pending' | 'disabled' => {
      if (questionIndex < currentQuestionIndex) return 'answered';
      if (questionIndex === currentQuestionIndex) return 'pending';
      return 'disabled';
    },
    [currentQuestionIndex],
  );

  return (
    <Home
      progress={progress}
      points={points}
      quizState={quizState}
      getStatus={getStatus}
    />
  );
};

export default Wrapper;
