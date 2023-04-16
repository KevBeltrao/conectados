import { type FC } from 'react';

import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import QuestOptionButton from '../../components/QuestOptionButton/QuestOptionButton';
import { Container, ListOption, ListWrapper, Title } from './styles';

interface QuestListTypes {
  initial?: number;
  headerTitle?: string;
  questTitle: string;
  optionsList: string[];
  answer: number;
  answerQuestion: () => void;
  setAnswer: (index: number) => void;
}

const QuestList: FC<QuestListTypes> = ({
  headerTitle,
  questTitle,
  optionsList,
  answerQuestion,
  answer,
  setAnswer,
}) => (
  <Container>
    {headerTitle && <Header title={headerTitle} goBack/>}

    <Title>{questTitle}</Title>
    
    <ListWrapper>
      {optionsList.map((option, index) => (
        <ListOption>
          <QuestOptionButton 
            onClick={() => setAnswer(index)}
            isActive={false}
            key={index}
          >
            {option}
          </QuestOptionButton>
        </ListOption>
      ))}
    </ListWrapper>

    <Button disabled={answer < 0} onClick={() => answerQuestion()}>Enviar</Button>
  </Container>
);

export default QuestList;
