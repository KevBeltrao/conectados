import { useState, type FC, type FormEvent, type ChangeEvent } from 'react';

import { sendEmail } from '../../services/email';

import PrizeModal from './PrizeModal';

interface WrapperTypes {
  open: boolean;
  closeModal: () => void;
}

const Wrapper: FC<WrapperTypes> = ({ open, closeModal }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event,
  ) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleSubmitForm: (event: FormEvent<HTMLFormElement>) => void = (
    event,
  ) => {
    event.preventDefault();

    const data = { email };

    sendEmail(data);
  };

  const shouldShowLabel = Boolean(email);

  return (
    <PrizeModal
      open={open}
      handleEmailChange={handleEmailChange}
      handleSubmitForm={handleSubmitForm}
      shouldShowLabel={shouldShowLabel}
      closeModal={closeModal}
    />
  );
};

export default Wrapper;
