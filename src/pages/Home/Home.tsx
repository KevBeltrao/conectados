import { type FC } from 'react';

import Progress from '../../components/ProgressBar';
import CardQuest from '../../components/QuestCard';

import { Container, ProgressContainer, QuestsWrapper } from './styles';
interface HomeTypes {
  initial?: number;
}

const Home: FC<HomeTypes> = () => {
  return (
    <Container>
      <h1>É hora do jogo!</h1>
      <h2>Complete as quests corretamente e obtenha uma surpresa no final</h2>

      <ProgressContainer>
        <Progress progress={0} progressTitle="Quests finalizadas" />

        {/* TODO: Points badge here */}
        <div> </div>
      </ProgressContainer>

      <QuestsWrapper>
        <CardQuest
          status="answered"
          questName="Quest 1"
          title="Você sabe?"
          targetUrl="/quest1"
        />
        <CardQuest
          status="answered"
          questName="Quest 1"
          title="Você sabe?"
          targetUrl="/quest1"
        />
      </QuestsWrapper>
    </Container>
  );
};

export default Home;
