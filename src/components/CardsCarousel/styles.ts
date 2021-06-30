import styled from 'styled-components';

import { ThemedScrollbar } from '../../styles/ThemedScrollbar';

export const Container = styled.div`
  width: 100%;

  > h1 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 520px) {
    > h1 {
      font-size: 22px;
      font-weight: 500;
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  overflow-y: hidden;
  overflow-x: auto;

  @media (max-width: 520px) {
    width: 100vw;
    margin-left: -16px;
    padding: 0px 15px;
  }

  @media (min-width: 520px) {
    ${ThemedScrollbar};
  }
`;

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-right: 10px;
    width: 150px;

    @media (max-width: 520px) {
      width: 100px;
      height: 150px;
    }
  }
`;
