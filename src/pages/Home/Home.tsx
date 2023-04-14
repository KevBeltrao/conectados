import { useState, type FC } from 'react';

import QuestOptionButton from '../../components/QuestOptionButton';

import { Container } from './styles';

interface HomeTypes {
  initial?: number;
}

const examples = ['Evidências', 'Aparências', 'Mentiras', 'Necessidades'];

const Home: FC<HomeTypes> = () => {
  const [activeExample, setActiveExample] = useState<string | null>(null);

  return (
    <Container>
      <h1>Home</h1>

      <ul>
        {examples.map((example) => {
          return (
            <li key={example}>
              <QuestOptionButton
                isActive={example === activeExample}
                onClick={() => {
                  setActiveExample(example);
                }}
              >
                {example}
              </QuestOptionButton>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Home;
