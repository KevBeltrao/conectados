import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 12px;
`;

export const MainContent = styled.div<{ type: 'success' | 'error' }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1,
  p {
    color: ${({ type }) => {
      return type === 'success'
        ? 'var(--color-dark-gray)'
        : 'var(--color-white)';
    }};
    margin: 0;
  }

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }
`;
