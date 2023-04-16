import { type FC, type PropsWithChildren } from 'react';

import Button from './Button';

interface WrapperProps extends PropsWithChildren {
  disabled?: boolean;
  onClick?: () => void;
}

const Wrapper: FC<WrapperProps> = ({
  disabled = false,
  onClick = () => {},
  children,
}) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Wrapper;
