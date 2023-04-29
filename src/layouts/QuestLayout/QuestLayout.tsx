import { type FC, type PropsWithChildren } from 'react';

import Button from '../../components/Button';

import backImage from './assets/back.svg';
import { BackButton, Container } from './styles';

interface QuestLayoutTypes extends PropsWithChildren {
  title: string;
  question: string;
  onSubmit: () => void;
  goToHome: () => void;
  submitDisabled: boolean;
}

const QuestLayout: FC<QuestLayoutTypes> = ({
  children,
  title,
  question,
  goToHome,
  submitDisabled,
  onSubmit,
}) => (
  <Container>
    <BackButton onClick={goToHome}>
      <img src={backImage} alt="voltar" />
    </BackButton>

    <h1>{title}</h1>
    <h2>{question}</h2>

    {children}

    <Button disabled={submitDisabled} onClick={onSubmit}>
      Enviar
    </Button>
  </Container>
);

export default QuestLayout;
