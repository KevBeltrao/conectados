import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 24px;

  position: relative;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;

  width: 24px;
  height: 24px;

  border-radius: 4px;

  background: transparent;
  border: 0;
  outline: 0;

  cursor: pointer;
  transition: border 0.1s;

  &:focus {
    border: 1px solid var(--color-purple-unsaturated);
  }
`;
