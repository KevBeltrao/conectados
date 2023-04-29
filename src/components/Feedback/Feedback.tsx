import { type FC } from 'react';

import Button from '../Button/Button';

import tryAgain from './assets/tryagain.svg';
import { Container } from './styles';

interface FeedbackTypes {
  title: string;
  content: string;
}

const Feedback: FC<FeedbackTypes> = ({ title, content }) => (
  <Container>
    <div>
      <img src={tryAgain} />
      <h1>{title}</h1>
      <h2>{content}</h2>
    </div>
    <Button disabled={false} onClick={() => {}}>
      Tentar novamente
    </Button>
  </Container>
);

export default Feedback;
