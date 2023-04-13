import { type FC } from 'react';

import ProgressBar from './ProgressBar';

interface WrapperTypes {
  progress: number;
}

const Wrapper: FC<WrapperTypes> = ({ progress }) => {
  return <ProgressBar progress={progress} />;
};

export default Wrapper;
