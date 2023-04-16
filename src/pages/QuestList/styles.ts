import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 24px 16px;
  gap: 48px;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 100%;
`;

export const ListOption  = styled.li`
  display: flex;
  width: 100%;
`;