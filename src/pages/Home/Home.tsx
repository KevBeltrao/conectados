import { type FC } from 'react';

import PointsBadge from '../../components/PointsBadge/PointsBadge';
import ProgressBar from '../../components/ProgressBar';
import CardQuest from '../../components/QuestCard';
import { type QuizState } from '../../globalStorage/QuizProvider';

import diamondIcon from './assets/diamond.svg';
import {
  Container,
  InfoContainer,
  ProgressContainer,
  QuestsWrapper,
} from './styles';
interface HomeTypes {
  progress: number;
  points: number;
  getStatus: (questionIndex: number) => 'answered' | 'pending' | 'disabled';
  quizState: QuizState;
}

const Home: FC<HomeTypes> = ({ progress, points, quizState, getStatus }) => {
  return (
    <Container>
      <h1>É hora do jogo!</h1>
      <h2>Complete as quests corretamente e obtenha uma surpresa no final</h2>

      <InfoContainer>
        <ProgressContainer>
          <p>Quests finalizadas</p>
          <ProgressBar progress={progress} />
        </ProgressContainer>

        <PointsBadge>
          <img src={diamondIcon} alt="Pontos" />
          {points} ponto{points >= 2 ? 's' : ''}
        </PointsBadge>
      </InfoContainer>

      <QuestsWrapper>
        {quizState.map((quizQuestion, index) => (
          <CardQuest
            key={quizQuestion.question}
            title={`Quest ${index + 1}`}
            questName={quizQuestion.question.substring(0, 25)}
            targetUrl={`/quest-${index + 1}`}
            status={getStatus(index)}
          />
        ))}
      </QuestsWrapper>
    </Container>
  );
};

export default Home;
