import { type FC } from 'react';

import Toast from './Toast';
import successIcon from './assets/success-icon.svg';
import errorIcon from './assets/error-icon.svg';

interface WrapperTypes {
  type: 'success' | 'error';
  title: string;
  description: string;
}

const Wrapper: FC<WrapperTypes> = ({ type, title, description }) => {
  const icon = {
    success: successIcon,
    error: errorIcon,
  }[type];

  return (
    <Toast type={type} icon={icon} title={title} description={description} />
  );
};

export default Wrapper;
