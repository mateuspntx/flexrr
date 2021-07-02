import { createGlobalStyle } from 'styled-components';

import { ThemedScrollbar } from './ThemedScrollbar';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.text};
    user-select: none;
  }

  button {
    cursor: pointer;
  }

  a { 
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text}
  }

  .themed-scroll {
    ${ThemedScrollbar}
  }
`;
