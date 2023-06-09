import { useEffect, useState, type Dispatch, type FC } from 'react';

import Button from '../../components/Button';
import PointsBadge from '../../components/PointsBadge/PointsBadge';
import PrizeModal from '../../components/PrizeModal';
import ProgressBar from '../../components/ProgressBar';
import CardQuest from '../../components/QuestCard';
import {
  type QuizAction,
  type QuizState,
} from '../../globalStorage/QuizProvider';

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
  quizDispatch: Dispatch<QuizAction>;
}

const Home: FC<HomeTypes> = ({
  progress,
  points,
  quizState,
  getStatus,
  quizDispatch,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal: () => void = () => {
    setIsModalOpen(false);
  };

  const areAllQuestsDone = progress === 1;

  useEffect(() => {
    if (areAllQuestsDone) {
      setIsModalOpen(true);
    }
  }, [progress]);

  return (
    <Container>
      <PrizeModal open={isModalOpen} closeModal={handleCloseModal} />

      <button
        style={{
          background: 'transparent',
          width: 80,
          height: 80,
          position: 'absolute',
          top: 10,
          right: 10,
        }}
        onClick={() => {
          quizDispatch({ type: 'RESET' });
        }}
      ></button>

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
            questName={quizQuestion.previewName}
            targetUrl={`/quest-${index + 1}`}
            status={getStatus(index)}
          />
        ))}
      </QuestsWrapper>

      {areAllQuestsDone ? (
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Resgatar prêmio
        </Button>
      ) : null}
    </Container>
  );
};

export default Home;
