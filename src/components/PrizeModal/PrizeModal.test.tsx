import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import * as sendEmail from '../../services/email';

import PrizeModal from '.';

describe('PrizeModal', () => {
  it('Should render PrizeModal component', () => {
    const onClickMock = vi.fn();

    render(<PrizeModal open={true} closeModal={onClickMock} />);

    expect(screen.getByTestId('prize-modal')).toBeInTheDocument();
  });

  it('Should submit when pressing enter', async () => {
    const mock = {
      closeModal: vi.fn(),
      email: 'johndoe@email.com',
    };

    render(<PrizeModal open={true} closeModal={mock.closeModal} />);

    const sendEmailMock = vi.spyOn(sendEmail, 'sendEmail' as never);
    const inputEmail = screen.getByTestId('prize-modal-email-input');

    await userEvent.type(inputEmail, `${mock.email}{enter}`);

    expect(sendEmailMock).toHaveBeenCalled();
  });

  it('Should submit when click on submit button', async () => {
    const mock = {
      closeModal: vi.fn(),
      email: 'johndoe@email.com',
    };

    render(<PrizeModal open={true} closeModal={mock.closeModal} />);

    const sendEmailMock = vi.spyOn(sendEmail, 'sendEmail' as never);
    const inputEmail = screen.getByTestId('prize-modal-email-input');
    const submitButton = screen.getByText('Enviar');

    await userEvent.type(inputEmail, mock.email);
    await userEvent.click(submitButton);

    expect(sendEmailMock).toHaveBeenCalled();
  });

  it('Should not submit when email is invalid', async () => {
    const mock = {
      closeModal: vi.fn(),
      email: 'johndoe',
    };

    render(<PrizeModal open={true} closeModal={mock.closeModal} />);

    const sendEmailMock = vi.spyOn(sendEmail, 'sendEmail' as never);
    const inputEmail = screen.getByTestId('prize-modal-email-input');
    const submitButton = screen.getByText('Enviar');

    await userEvent.type(inputEmail, mock.email);
    await userEvent.click(submitButton);

    expect(sendEmailMock).not.toHaveBeenCalled();
  });
});
