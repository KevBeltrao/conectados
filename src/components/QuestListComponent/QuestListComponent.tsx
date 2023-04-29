import { type Dispatch, type FC, type SetStateAction } from 'react';

import QuestOptionButton from '../QuestOptionButton';

import { Container } from './styles';

interface QuestListComponentTypes {
  answers: string[];
  selectedAnswer: number | null;
  setSelectedAnswer: Dispatch<SetStateAction<null | number>>;
}

const QuestListComponent: FC<QuestListComponentTypes> = ({
  answers,
  selectedAnswer,
  setSelectedAnswer,
}) => (
  <Container>
    {answers.map((answer, index) => (
      <li key={answer}>
        <QuestOptionButton
          isActive={selectedAnswer === index}
          onClick={() => {
            setSelectedAnswer(index);
          }}
        >
          {answer}
        </QuestOptionButton>
      </li>
    ))}
  </Container>
);

export default QuestListComponent;
