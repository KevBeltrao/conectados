import styled from 'styled-components';

import backgroundImage from './assets/background.png';

export const Container = styled.div`
  background-image: url('${backgroundImage}');
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  padding: 60px 30px;

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  position: absolute;
  top: 60px;
  left: 24px;
  padding: 10px;
`;
