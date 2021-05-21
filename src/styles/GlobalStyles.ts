import { createGlobalStyle } from 'styled-components';

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
  }

  button {
    cursor: pointer;
  }

  a { 
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text}
  }

  .themed-scroll {
    ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #131313;

    height: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2d2d2d;
    height: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    height: 8px;
    border-radius: 10px;
  }
  }
`;
