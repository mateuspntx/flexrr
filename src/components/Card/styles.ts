import styled, { css } from 'styled-components';

import { ShimmerEffect } from '../Skeletons/ShimmerEffect';
interface ContainerProps {
  hoverAnimation: boolean;
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: transform 0.6s ease-in-out;
  max-width: 150px;
  min-height: 225px;
  height: 100%;
  width: 100%;
  border-radius: 5px;

  ${({ isLoading }) =>
    isLoading
      ? css`
          ${ShimmerEffect}
        `
      : null}

  ${({ hoverAnimation }) =>
    hoverAnimation
      ? css`
          @media (min-width: 920px) {
            &:hover {
              transform: scale(1.08);
            }
          }
        `
      : null}

@media (max-width: 920px) {
    min-height: unset;
  }
`;

export const PosterWrapper = styled.img<{ opacity: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 0px 25px -15px #000000;
  opacity: ${({ opacity }) => (opacity ? 0 : 1)};
  transition: opacity 0.5s;
`;

export const Details = styled.div`
  > h3 {
    max-width: 145px;
    width: 20vw;
    margin-top: 10px;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
