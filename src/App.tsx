import { useContext, useEffect, type FC } from 'react';

import { QuizContext } from './globalStorage/QuizProvider';
import AppRoutes from './routes';
import GlobalStyle, { AppContainer } from './styles/GlobalStyle';

const App: FC = () => {
  const { quizDispatch } = useContext(QuizContext);

  useEffect(() => {
    quizDispatch({ type: 'INIT' });
  }, []);

  return (
    <AppContainer>
      <AppRoutes />

      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
