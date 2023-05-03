export type QuizActionType = 'INIT' | 'ANSWER' | 'RESET';

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
  previewName: string;
}
export type QuizState = QuizQuestion[];
