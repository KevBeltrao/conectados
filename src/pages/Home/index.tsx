import { type FC } from 'react';

import Home from './Home';

interface WrapperTypes {
  initial?: number;
}

const Wrapper: FC<WrapperTypes> = () => {
  return <Home />;
};

export default Wrapper;
