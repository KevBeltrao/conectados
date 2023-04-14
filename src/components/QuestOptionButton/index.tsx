import { type FC, type PropsWithChildren } from 'react';

import QuestOptionButton from './QuestOptionButton';

interface WrapperTypes extends PropsWithChildren {
  isActive?: boolean;
  onClick?: () => void;
}

const Wrapper: FC<WrapperTypes> = ({
  children,
  isActive = false,
  onClick = () => {},
}) => {
  return (
    <QuestOptionButton isActive={isActive} onClick={onClick}>
      {children}
    </QuestOptionButton>
  );
};

export default Wrapper;
