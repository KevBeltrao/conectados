import { type FC } from 'react';

import { Container, MainContent } from './styles';

interface ToastProps {
  type: 'success' | 'error';
  icon: string;
  title: string;
  description: string;
}

const Toast: FC<ToastProps> = ({ type, icon, title, description }) => (
  <Container data-testid="toast-container">
    <img src={icon} />

    <MainContent type={type}>
      <h1>{title}</h1>

      <p>{description}</p>
    </MainContent>
  </Container>
);

export default Toast;
