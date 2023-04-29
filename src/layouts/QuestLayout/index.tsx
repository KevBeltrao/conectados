import { useCallback, type FC, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import QuestLayout from './QuestLayout';

interface WrapperTypes extends PropsWithChildren {
  title: string;
  question: string;
  onSubmit: () => void;
  submitDisabled?: boolean;
}

const Wrapper: FC<WrapperTypes> = ({
  title,
  question,
  onSubmit,
  children,
  submitDisabled = false,
}) => {
  const navigate = useNavigate();

  const goToHome = useCallback((): void => {
    navigate('/');
  }, []);

  return (
    <QuestLayout
      title={title}
      question={question}
      onSubmit={onSubmit}
      goToHome={goToHome}
      submitDisabled={submitDisabled}
    >
      {children}
    </QuestLayout>
  );
};

export default Wrapper;
