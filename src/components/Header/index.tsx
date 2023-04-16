import { type FC } from 'react';

import Header from './Header';

interface WrapperTypes {
  initial?: number;
}

const Wrapper: FC<WrapperTypes> = () => {
  return <Header />;
};

export default Wrapper;
