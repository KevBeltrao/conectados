import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ToastContainer, toast } from 'react-toastify';

import Toast from '.';

describe('Toast', () => {
  it('Should render Toast component', async () => {
    render(<ToastContainer autoClose={false} />);

    toast(<Toast type="success" title="Title" description="Lorem ipsum" />);

    expect(await screen.findByTestId('toast-container')).toBeInTheDocument();
  });

  it('Should render defined title', async () => {
    const title = 'Title Test';

    render(<ToastContainer autoClose={false} />);

    toast(<Toast type="success" title={title} description="Lorem ipsum" />);

    expect(await screen.findByText(title)).toBeInTheDocument();
  });

  it('Should render defined description', async () => {
    const description = 'Lorem ipsum';

    render(<ToastContainer autoClose={false} />);

    toast(<Toast type="success" title="Title" description={description} />);

    expect(await screen.findByText(description)).toBeInTheDocument();
  });
});
