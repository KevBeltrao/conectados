import { type FC } from 'react';

import { useNavigate } from 'react-router-dom';
import ArrowLeft from './icons/ArrowLeft';
import { BackButton, Container, Title } from './styles';

interface HeaderTypes {
  initial?: number;
  title: string;
  goBack?: boolean;
}

const Header: FC<HeaderTypes> = ({
  title,
  goBack = false,
}) => {
  const navigate = useNavigate();

  return (
  <Container>
    {goBack && (
      <BackButton onClick={() => navigate(-1)}>
        <ArrowLeft />
      </BackButton>
    )}
    <Title>{title}</Title>
  </Container>
)};

export default Header;
