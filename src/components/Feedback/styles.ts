import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;

  position: fixed;
  height: 100vh;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--color-primary);
  box-sizing: border-box;

  padding: 32px;

  transition: top 0.2s;

  &.hidden {
    top: 100vh;
  }

  .content {
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    text-align: center;

    h1 {
      font-weight: 600;
    }
    h2 {
      font-weight: 500;
    }
  }

  header {
    position: absolute;
    top: 8%;
  }

  footer {
    position: absolute;
    bottom: 8%;
    width: 80%;
  }
`;
