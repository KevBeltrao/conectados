import { answer, init } from './quizReducers';
import { type QuizAction, type QuizState } from './quizTypes';

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'INIT':
      return init();
    case 'ANSWER':
      return answer(state, action.payload);
    default:
      return state;
  }
};

export default quizReducer;
