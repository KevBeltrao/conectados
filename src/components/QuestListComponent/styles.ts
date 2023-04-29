import styled from 'styled-components';

export const Container = styled.ul`
  counter-reset: quest-option;
  list-style-type: none;
  gap: 24px;
  display: flex;
  flex-direction: column;

  li {
    counter-increment: quest-option;
  }
`;
