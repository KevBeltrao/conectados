import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import QuestListComponent from '.';

describe('QuestListComponent', () => {
  it('Should render QuestListComponent component', () => {
    render(
      <QuestListComponent
        answers={['answer1', 'answer2']}
        selectedAnswer={null}
        setSelectedAnswer={() => {}}
      />,
    );

    expect(screen.getByText(/answer1/i)).toBeInTheDocument();
    expect(screen.getByText(/answer2/i)).toBeInTheDocument();
  });
});
