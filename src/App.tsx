import { useContext, useEffect, useState, type FC } from 'react';

import ProgressBar from './components/ProgressBar';
import { QuizContext } from './globalStorage/QuizProvider';
import AppRoutes from './routes';
import GlobalStyle, { AppContainer } from './styles/GlobalStyle';

const App: FC = () => {
  const { quizDispatch } = useContext(QuizContext);
  const [progress, setProgress] = useState(0.3);
  const [input, setInput] = useState('0.3');

  useEffect(() => {
    quizDispatch({ type: 'INIT' });
  }, []);

  return (
    <AppContainer>
      <AppRoutes />

      <div style={{ width: 162 }}>
        <ProgressBar progress={progress} />
      </div>

      <br />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setProgress(Number(input));
        }}
      >
        <input
          value={input}
          max={1}
          min={0}
          step={0.01}
          style={{ width: '100px' }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="number"
        />
        <button type="submit">Set progress</button>
      </form>

      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
