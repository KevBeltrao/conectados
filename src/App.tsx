import { useContext, useEffect, type FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      <ToastContainer hideProgressBar />

      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
