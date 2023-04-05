export type QuizActionType = 'INIT' | 'ANSWER';

export interface QuizActionPayload {
  index: number;
  answer: number;
}

export interface QuizAction {
  type: QuizActionType;
  payload?: QuizActionPayload;
}

export interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswer: number;
  userAnswer: number | null;
}
export type QuizState = QuizQuestion[];
