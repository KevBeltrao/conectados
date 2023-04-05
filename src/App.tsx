import { type FC, useContext, useEffect } from 'react';
import Button from './components/Button';
import GlobalStyle, { AppContainer } from './styles/GlobalStyle';
import { QuizContext } from './globalStorage/QuizProvider';

const App: FC = () => {
  const { quizState, quizDispatch } = useContext(QuizContext);

  useEffect(() => {
    quizDispatch({ type: 'INIT' });
  }, []);

  return (
    <AppContainer>
      {quizState.map((quiz, indexQuestion) => (
        <div key={quiz.question}>
          <h1 style={{ color: '#fff' }}>{quiz.question}</h1>

          {quiz.answers.map((answer, indexAnswer) => (
            <Button
              key={`${quiz.question}-${answer}`}
              onClick={() => {
                quizDispatch({
                  type: 'ANSWER',
                  payload: {
                    index: indexQuestion,
                    answer: indexAnswer,
                  },
                });
              }}
            >
              {answer}
              {quizState[indexQuestion].userAnswer !== null &&
                quizState[indexQuestion].userAnswer === indexAnswer &&
                (quizState[indexQuestion].userAnswer ===
                quizState[indexQuestion].correctAnswer
                  ? '✅'
                  : '❌')}
            </Button>
          ))}
        </div>
      ))}

      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
