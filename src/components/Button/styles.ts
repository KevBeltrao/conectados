import styled from 'styled-components';

export const Container = styled.button`
  border-width: 1px;
  border-style: solid;
  border-radius: 100px;

  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: background-color 0.3s, color 0.3s;
  color: var(--color-primary);
  border-color: var(--color-secondary);
  background-color: var(--color-secondary);

  font-weight: 600;

  &[disabled] {
    background-color: var(--color-secondary-light);
    color: var(--color-gray);
  }
`;
