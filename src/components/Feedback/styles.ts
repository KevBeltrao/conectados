import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 200px;
  margin-top: 178px;
  div {
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    h1 {
      font-weight: 600;
    }
    h2 {
      font-weight: 500;
    }
  }
`;
