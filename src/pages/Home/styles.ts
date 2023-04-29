import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px 20px;

  h2 {
    font-weight: 500;
  }
`;

export const InfoContainer = styled.div`
  margin: 25px 0;
  display: grid;
  grid-auto-columns: 170px auto;
  grid-auto-flow: column;
  justify-content: space-between;
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestsWrapper = styled.div`
  > button {
    margin-bottom: 24px;
  }
`;
