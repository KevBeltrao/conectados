import { useState, type FC, type FormEvent, type ChangeEvent } from 'react';

import { sendEmail } from '../../services/email';
import { dispatchToast } from '../../utils/dispatchToast';

import PrizeModal from './PrizeModal';

interface WrapperTypes {
  open: boolean;
  closeModal: () => void;
}

const Wrapper: FC<WrapperTypes> = ({ open, closeModal }) => {
  const [email, setEmail] = useState('');

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event,
  ) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleSubmitForm: (
    event: FormEvent<HTMLFormElement>,
  ) => Promise<void> = async (event) => {
    setIsSubmitLoading(true);

    event.preventDefault();

    const data = { email };

    await sendEmail(
      data,
      () => {
        dispatchToast.success({
          title: 'Sucesso',
          description: 'Um e-mail foi enviado para você',
        });

        closeModal();
        setEmail('');
      },
      () => {
        dispatchToast.error({
          title: 'Erro',
          description: 'Não foi possível enviar o e-mail',
        });
      },
    );

    setIsSubmitLoading(false);
  };

  const shouldShowLabel = Boolean(email);

  return (
    <PrizeModal
      open={open}
      handleEmailChange={handleEmailChange}
      handleSubmitForm={handleSubmitForm}
      shouldShowLabel={shouldShowLabel}
      closeModal={closeModal}
      isSubmitLoading={isSubmitLoading}
    />
  );
};

export default Wrapper;
