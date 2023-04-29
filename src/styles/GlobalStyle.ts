import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap');

  :root {
    --color-primary: #3C234D;
    --color-primary-light: #452d53;
    --color-primary-lightest: #533069;
    --color-primary-lightest-opacity: #53306980;
    --color-disabled-opacity: #FFFFFF0D;
    --color-dark-gray: #343A40;
    --color-disabled-text: #A59FA8;
    --color-gray: #6C757D;
    --color-gray-400: #CED4DA;
    --color-purple-saturated: #5343ab;
    --color-purple-unsaturated: #9488D4;
    --color-white: #F8F9FA;
    --color-white-secondary: #DEE2E6;
    --color-secondary: #C6D40F;
    --color-secondary-light: #ECF57F;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body, input, button, textarea {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  p {
    margin-bottom: 4px;
  }

  h1 {
    color: var(--color-white);
    font-size: 1.8em;
    margin-bottom: 4px;
  }

  h2 {
    color: var(--color-white-secondary);
    font-size: 1.25em;
    margin-bottom: 4px;
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
`;

export default GlobalStyle;
