import { type FC } from 'react';

import QuestCard from '../../components/QuestCard';

import { Container } from './styles';

interface HomeTypes {
  initial?: number;
}

const Home: FC<HomeTypes> = () => (
  <Container>
    <h1>Home</h1>

    <div
      style={{
        padding: 10,
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      <QuestCard
        status="answered"
        questName="Quest 1"
        title="Você sabe?"
        targetUrl="/quest1"
      />

      <QuestCard
        status="pending"
        questName="Quest 2"
        title="Complete a letra"
        targetUrl="/quest2"
      />
      <QuestCard
        status="disabled"
        questName="Quest 3"
        title="Hora da selfie"
        targetUrl="/quest3"
      />
    </div>
  </Container>
);

export default Home;
