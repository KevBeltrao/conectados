import styled, { css } from 'styled-components';

export const Container = styled.button.attrs({
  type: 'button',
})`
  border-radius: 15px;
  width: 100%;
  padding: 24px 16px;

  display: flex;
  gap: 16px;
  align-items: center;

  .text-content {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
      font-weight: 500;
      font-size: 1rem;
    }

    span {
      font-weight: 600;
      font-size: 1.25rem;
    }
  }

  ${({ status }: { status: 'answered' | 'pending' | 'disabled' }) => {
    if (status === 'answered') {
      return css`
        background-color: var(--color-primary-lightest);
        color: var(--color-white);
      `;
    }
    if (status === 'pending') {
      return css`
        background-color: var(--color-primary-lightest-opacity);
        color: var(--color-white);
        cursor: pointer;
      `;
    }
    if (status === 'disabled') {
      return css`
        background-color: var(--color-disabled-opacity);
        border: 1px solid var(--color-disabled-text);
        color: var(--color-disabled-text);
      `;
    }
  }}
`;
