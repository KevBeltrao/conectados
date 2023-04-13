import {
  type FC,
  createContext,
  type PropsWithChildren,
  useReducer,
  type Dispatch,
} from 'react';

import quizReducer from './quizReducer';
import { type QuizAction, type QuizState } from './quizTypes';

export const QuizContext = createContext<{
  quizState: QuizState;
  quizDispatch: Dispatch<QuizAction>;
}>({
  quizState: [],
  quizDispatch: () => {},
});

const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, []);

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
