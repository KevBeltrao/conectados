import { type FC } from 'react';

import Button from '../Button/Button';
import PointsBadge from '../PointsBadge/PointsBadge';

import diamondIcon from './assets/diamond.svg';
import { Container } from './styles';

interface FeedbackTypes {
  title: string;
  content: string;
  handleButtonClick: () => void;
  image: string;
  buttonText: string;
  isVisible: boolean;
  points: number;
  type: 'success' | 'failure';
}

const Feedback: FC<FeedbackTypes> = ({
  title,
  content,
  handleButtonClick,
  image,
  buttonText,
  isVisible,
  points,
  type,
}) => (
  <Container className={isVisible ? '' : 'hidden'}>
    {type === 'success' && (
      <header>
        <PointsBadge>
          <img src={diamondIcon} alt="Pontos" />
          {points} ponto{points >= 2 ? 's' : ''}
        </PointsBadge>
      </header>
    )}

    <div className="content">
      <img src={image} />
      <h1>{title}</h1>
      <h2>{content}</h2>
    </div>

    <footer>
      <Button disabled={false} onClick={handleButtonClick}>
        {buttonText}
      </Button>
    </footer>
  </Container>
);

export default Feedback;
