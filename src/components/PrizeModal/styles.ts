import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled(Modal).attrs({
  style: {
    overlay: {
      ...Modal.defaultStyles.overlay,
      backgroundColor: 'rgba(0, 0, 0, 0.50)',
    },
  },
})``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  max-width: 354px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 48px 13px;

  border-radius: 8px;

  background-color: var(--color-primary);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Description = styled.p`
  margin: 16px 0 32px 0;

  font-size: 1rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;

  background-color: transparent;
  border: none;
  outline: none;

  color: white;

  font-size: 0.875rem;

  &::placeholder {
    color: var(--color-gray-400);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;

  width: 100%;
`;

export const EmailFieldset = styled.fieldset`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: fit-content;

  padding: 14px 16px;

  border: 1px solid white;
  border-radius: 30px;

  position: relative;

  input {
    font-size: 0.875rem;
    height: fit-content;
  }
`;

export const EmailLegend = styled.legend`
  margin-left: -3px;
  padding: 0 4px;

  font-size: 0.75rem;

  background-color: var(--color-primary);

  position: absolute;
  top: -7px;
`;
