import { answer, init, reset } from './quizReducers';
import { type QuizAction, type QuizState } from './quizTypes';

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'INIT':
      return init();
    case 'ANSWER':
      return answer(state, action.payload);
    case 'RESET':
      return reset();
    default:
      return state;
  }
};

export default quizReducer;
