import styled, { css } from 'styled-components';

import { ThemedScrollbar } from '../../styles/ThemedScrollbar';

interface ScrollWrapperProps {
  gradientBar: boolean;
  isScrollAtEnd: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;

  > h1 {
    font-size: 22px;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 520px) {
    > h1 {
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

export const ScrollWrapper = styled.div<ScrollWrapperProps>`
  display: flex;
  flex-direction: row;

  @media (min-width: 520px) {
    ${({ gradientBar, isScrollAtEnd }) =>
      gradientBar &&
      css`
        &::after {
          content: '';
          width: 60px;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          background-image: ${({ theme }) =>
            `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${theme.colors.backgroundColor} 100%)`};
          pointer-events: none;
          transition: opacity 0.5s ease-in-out;
          opacity: ${isScrollAtEnd ? 0 : 1};
        }
      `}
  }
`;
