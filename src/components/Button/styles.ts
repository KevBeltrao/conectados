import styled, { css } from 'styled-components'

export const Container = styled.button`
  border-width: 1px;
  border-style: solid;
  border-radius: 100px;
  
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: background-color 0.3s, color 0.3s;

  ${({ variation }: { variation: 'primary' | 'bordered' }) => {
    if (variation === 'primary') {
      return css`
        color: var(--color-primary);
        border-color: var(--color-secondary);
        background-color: var(--color-secondary);

        &:hover {
          background-color: var(--color-secondary-light);
        }
      `
    }

    return css`
      color: var(--color-white);
      border-color: var(--color-white);
      background-color: transparent;

      transition: background-color 0.3s;

      &:hover {
        background-color: var(--color-white);
        color: var(--color-primary);
      }
    `
  }}
`
