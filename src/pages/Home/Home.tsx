import { type FC } from 'react';

import Button from '../../components/Button';

import { Container } from './styles';

interface HomeTypes {
  initial?: number;
}

const Home: FC<HomeTypes> = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Button
        onClick={() => {
          alert('Entrou');
        }}
      >
        Click me
      </Button>
      <Button
        disabled
        onClick={() => {
          alert('Entrou');
        }}
      >
        Click me
      </Button>
    </Container>
  );
};

export default Home;
