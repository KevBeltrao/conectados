import { type FC } from 'react';

import { Container } from './styles';

interface ProgressBarTypes {
  progress: number;
}

const ProgressBar: FC<ProgressBarTypes> = ({ progress }) => (
  <Container data-testid="progress-bar" progress={progress} />
);

export default ProgressBar;
