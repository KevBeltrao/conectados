import { type FC } from 'react';

import { Container } from './styles';

interface QuestCardTypes {
  status: 'answered' | 'pending' | 'disabled';
  Icon: FC;
  questName: string;
  title: string;
  handleClick: () => void;
}

const QuestCard: FC<QuestCardTypes> = ({
  status,
  Icon,
  questName,
  title,
  handleClick,
}) => (
  <Container status={status} onClick={handleClick}>
    <Icon />

    <div className="text-content">
      <h3>{questName}</h3>
      <span>{title}</span>
    </div>
  </Container>
);

export default QuestCard;
