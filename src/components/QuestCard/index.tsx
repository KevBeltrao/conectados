import { useCallback, useMemo, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import QuestCard from './QuestCard';
import { Check, Disabled, Pending } from './icons';

interface WrapperTypes {
  status: 'answered' | 'pending' | 'disabled';
  questName: string;
  title: string;
  targetUrl: string;
}

const Wrapper: FC<WrapperTypes> = ({ status, questName, title, targetUrl }) => {
  const navigate = useNavigate();

  const Icon = useMemo(() => {
    if (status === 'answered') return Check;
    if (status === 'pending') return Pending;
    return Disabled;
  }, [status]);

  const handleClick = useCallback(() => {
    if (status === 'pending') {
      navigate(targetUrl);
    }
  }, [status, targetUrl]);

  return (
    <QuestCard
      status={status}
      Icon={Icon}
      questName={questName}
      title={title}
      handleClick={handleClick}
    />
  );
};

export default Wrapper;
