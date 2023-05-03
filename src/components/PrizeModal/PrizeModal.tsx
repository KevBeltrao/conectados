import { type FC, type FormEvent, type ChangeEvent } from 'react';

import Button from '../Button';

import mailIcon from './assets/mail.svg';
import loadingGif from './assets/loading.gif';
import {
  Container,
  Content,
  Title,
  Description,
  Input,
  FormContainer,
  EmailLegend,
  EmailFieldset,
} from './styles';

interface PrizeModalTypes {
  open: boolean;
  shouldShowLabel: boolean;
  isSubmitLoading: boolean;

  handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  closeModal: () => void;
}

const PrizeModal: FC<PrizeModalTypes> = (props) => {
  const {
    open,
    handleEmailChange,
    handleSubmitForm,
    shouldShowLabel,
    closeModal,
    isSubmitLoading,
  } = props;

  return (
    <div data-testid="prize-modal">
      <Container
        isOpen={open}
        onRequestClose={closeModal}
        contentElement={(props, children) => (
          <Content {...props}>{children}</Content>
        )}
        appElement={document.getElementById('root') as HTMLElement}
      >
        <Title>Receba sua recompensa</Title>

        <Description>
          Para receber a sua recompensa siga as instruções enviadas para o
          e-mail
        </Description>

        <FormContainer
          data-testid="prize-modal-form"
          onSubmit={(event) => {
            void handleSubmitForm(event);
          }}
        >
          <EmailFieldset>
            <EmailLegend>{shouldShowLabel ? 'E-mail' : ''}</EmailLegend>

            <img src={mailIcon} />

            <Input
              data-testid="prize-modal-email-input"
              type="email"
              required
              placeholder="Digite seu e-mail"
              onChange={handleEmailChange}
            />
          </EmailFieldset>

          <Button disabled={isSubmitLoading}>
            {isSubmitLoading ? <img width={20} src={loadingGif} /> : 'Enviar'}
          </Button>
        </FormContainer>
      </Container>
    </div>
  );
};

export default PrizeModal;
