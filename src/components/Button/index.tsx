import { type FC, type PropsWithChildren } from 'react';

import Button from './Button';

interface WrapperProps extends PropsWithChildren {
  onClick?: () => void;
}

const Wrapper: FC<WrapperProps> = ({ onClick = () => {}, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Wrapper;
