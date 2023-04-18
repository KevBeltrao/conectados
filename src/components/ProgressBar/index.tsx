import { type FC } from 'react';

import ProgressBar from './ProgressBar';

interface WrapperTypes {
  progress: number;
  progressTitle: string;
}

const Wrapper: FC<WrapperTypes> = ({ progress, progressTitle }) => {
  return (
    <div>
      <p>{progressTitle}</p>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Wrapper;
