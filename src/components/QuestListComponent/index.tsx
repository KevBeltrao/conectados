import { type Dispatch, type FC, type SetStateAction } from 'react';

import QuestListComponent from './QuestListComponent';

interface WrapperTypes {
  answers: string[];
  selectedAnswer: number | null;
  setSelectedAnswer: Dispatch<SetStateAction<null | number>>;
}

const Wrapper: FC<WrapperTypes> = ({
  answers,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  return (
    <QuestListComponent
      answers={answers}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
    />
  );
};

export default Wrapper;
