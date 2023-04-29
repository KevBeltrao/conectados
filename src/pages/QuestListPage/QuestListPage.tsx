import { type Dispatch, type FC, type SetStateAction } from 'react';

import Feedback from '../../components/Feedback';
import QuestListComponent from '../../components/QuestListComponent/QuestListComponent';
import { type QuizQuestion } from '../../globalStorage/QuizProvider';
import QuestLayout from '../../layouts/QuestLayout';

import { Container, Content } from './styles';

interface QuestListPageTypes {
  quizQuestion: QuizQuestion;
  quizTitle: string;
  selectedAnswer: number | null;
  setSelectedAnswer: Dispatch<SetStateAction<null | number>>;
  handleSubmit: () => void;
  isFeedbackVisible: boolean;
  setIsFeedbackVisible: Dispatch<SetStateAction<boolean>>;
}

const QuestListPage: FC<QuestListPageTypes> = ({
  quizQuestion,
  quizTitle,
  selectedAnswer,
  setSelectedAnswer,
  handleSubmit,
  isFeedbackVisible,
  setIsFeedbackVisible,
}) => (
  <Container>
    <QuestLayout
      onSubmit={handleSubmit}
      question={quizQuestion.question}
      title={quizTitle}
      submitDisabled={selectedAnswer === null}
    >
      <Content>
        <QuestListComponent
          answers={quizQuestion.answers}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
      </Content>
    </QuestLayout>

    <Feedback
      isVisible={isFeedbackVisible}
      setIsVisible={setIsFeedbackVisible}
      type={
        quizQuestion.correctAnswer === quizQuestion.userAnswer
          ? 'success'
          : 'failure'
      }
    />
  </Container>
);

export default QuestListPage;
