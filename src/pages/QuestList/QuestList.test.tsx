import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import QuestList from '.';

describe('QuestList', () => {
  it('Should render QuestList component', () => {
  render(
    <QuestList />);

    expect(screen.getByText(/QuestList/i)).toBeInTheDocument();
  });
});
