import { type FC, type PropsWithChildren } from 'react';

import PointsBadge from './PointsBadge';

interface WrapperTypes extends PropsWithChildren {}

const Wrapper: FC<WrapperTypes> = ({ children }) => {
  return <PointsBadge>{children}</PointsBadge>;
};

export default Wrapper;
