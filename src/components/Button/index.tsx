import { type PropsWithChildren, type FC } from 'react';

import Button from './Button';

interface WrapperProps extends PropsWithChildren {
  onClick?: () => void;
  variation?: 'primary' | 'bordered';
}

const Wrapper: FC<WrapperProps> = ({
  onClick = () => {},
  variation = 'primary',
  children,
}) => {
  return (
    <Button onClick={onClick} variation={variation}>
      {children}
    </Button>
  );
};

export default Wrapper;
