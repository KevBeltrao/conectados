import { type Dispatch, type FC, type SetStateAction } from 'react';

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
}

const QuestListPage: FC<QuestListPageTypes> = ({
  quizQuestion,
  quizTitle,
  selectedAnswer,
  setSelectedAnswer,
  handleSubmit,
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
  </Container>
);

export default QuestListPage;
