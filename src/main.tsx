import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuizProvider from './globalStorage/QuizProvider/QuizProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
);
