import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  disabled: boolean;
}

const Button: FC<ButtonProps> = ({ disabled, onClick, children }) => {
  return (
    <Container disabled={disabled} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
