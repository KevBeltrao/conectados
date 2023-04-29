import { useContext, type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { QuizContext } from './globalStorage/QuizProvider';
import Home from './pages/Home';
import QuestListPage from './pages/QuestListPage';

const AppRoutes: FC = () => {
  const { quizState, quizDispatch } = useContext(QuizContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />\
        {quizState.map((quizQuestion, index) => (
          <Route
            key={`route-${quizQuestion.question}`}
            path={`/quest-${index + 1}`}
            element={
              <QuestListPage
                quizQuestion={quizQuestion}
                questionIndex={index}
                quizDispatch={quizDispatch}
                quizTitle={`Quest ${index + 1}`}
              />
            }
          />
        ))}
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
