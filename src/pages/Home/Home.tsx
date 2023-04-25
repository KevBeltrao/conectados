import { useState, type FC } from 'react';

import PrizeModal from '../../components/PrizeModal';

import { Container } from './styles';

interface HomeTypes {
  initial?: number;
}

const Home: FC<HomeTypes> = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Container>
      <h1>Home</h1>

      <PrizeModal
        open={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />
    </Container>
  );
};

export default Home;
