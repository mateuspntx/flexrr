import { css } from 'styled-components';

export const ThemedScrollbar = css`
  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #13131357;
    height: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2d2d2dad;
    height: 8px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555a;
    height: 8px;
    border-radius: 10px;
  }
`;
