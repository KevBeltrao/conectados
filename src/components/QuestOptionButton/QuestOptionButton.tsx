import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

interface QuestOptionButtonTypes extends PropsWithChildren {
  isActive: boolean;
  onClick: () => void;
}

const QuestOptionButton: FC<QuestOptionButtonTypes> = ({
  children,
  isActive,
  onClick,
}) => (
  <Container
    onClick={onClick}
    className={`quest-option${isActive ? ' active' : ''}`}
  >
    {children}
  </Container>
);

export default QuestOptionButton;
