import { useContext, useState, type FC } from 'react';

import { QuizContext } from '../../globalStorage/QuizProvider';
import QuestList from './QuestList';

interface WrapperTypes {
  initial?: number;
}

const Wrapper: FC<WrapperTypes> = () => {
  const quizIndex = 0;
  const { quizDispatch, quizState } = useContext(QuizContext);

  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const answerQuestion = () => {
    quizDispatch({ 
      type: 'ANSWER', 
      payload: {
        index: quizIndex,
        answer: selectedAnswer,
      }
    });

    setIsAnswerCorrect(quizState[quizIndex].correctAnswer === selectedAnswer);
  }

  const headerTitle = `Quiz ${quizIndex + 1}`;
  const questTitle = quizState[quizIndex]?.question || '';
  const optionsList = quizState[quizIndex]?.answers || [];

  if (isAnswerCorrect) {
    return <div>Acertou</div>;
  }

  return (
    <QuestList  
      headerTitle={headerTitle} 
      questTitle={questTitle}
      optionsList={optionsList}
      answerQuestion={answerQuestion}
      answer={selectedAnswer}
      setAnswer={setSelectedAnswer}
    />
  );
};

export default Wrapper;
