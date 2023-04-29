import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import QuestListPage from '.';

describe('QuestListPage', () => {
  it('Should render QuestListPage with list and layout with specified title and answers', () => {
    render(
      <BrowserRouter>
        <QuestListPage
          questionIndex={0}
          quizDispatch={() => {}}
          quizTitle="Title"
          quizQuestion={{
            question: 'Question?',
            answers: ['Option 1'],
            correctAnswer: 0,
            userAnswer: 0,
          }}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/option 1/i)).toBeInTheDocument();
  });
});
