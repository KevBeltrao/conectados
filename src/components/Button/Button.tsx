import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
