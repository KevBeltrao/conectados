import { type FC } from 'react';

import { Container } from './styles';

interface HomeTypes {
  initial?: number;
}

const Home: FC<HomeTypes> = () => (
  <Container>
    <h1>Home</h1>
  </Container>
);

export default Home;
