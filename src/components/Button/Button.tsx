import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  variation: 'primary' | 'bordered';
}

const Button: FC<ButtonProps> = ({ onClick, variation, children }) => {
  return (
    <Container onClick={onClick} variation={variation}>
      {children}
    </Container>
  );
};

export default Button;
