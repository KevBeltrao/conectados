import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--color-purple-unsaturated);
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    width: ${({ progress }: { progress: number }) => `${progress * 100}%`};
    height: 100%;
    background-color: var(--color-purple-saturated);
    border-radius: 8px;
  }
`;
