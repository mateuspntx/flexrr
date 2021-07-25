import styled, { css, keyframes } from 'styled-components';
import { lighten } from 'polished';
import YouTube from 'react-youtube';

import { ShimmerEffect } from '../Skeletons/ShimmerEffect';

import { CardPosition } from './index';

interface HoverContainerProps {
  position: CardPosition;
}

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: transform 0.6s ease-in-out;
  max-width: 250px;
  width: 13vw;
  min-height: 150px;
  height: 100%;
  border-radius: 5px;

  ${({ isLoading }) =>
    isLoading
      ? css`
          ${ShimmerEffect}
        `
      : null}

  @media (max-width: 760px) {
    min-height: unset;
    min-width: 100px;
    width: 113px;
    height: 170.77px;
  }
`;

export const PosterWrapper = styled.img<{ opacity: boolean }>`
  min-width: 100%;
  max-width: 250px;
  width: 13vw;
  min-height: 150px;
  max-height: 385px;
  height: 20vw;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 0px 25px -15px #000000;
  opacity: ${({ opacity }) => (opacity ? 0 : 1)};
  transition: opacity 0.5s;

  @media (max-width: 760px) {
    min-height: unset;
    min-width: 100px;
    width: 113px;
    height: 170.77px;
  }
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
    text-align: center;

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

const HoverContainerAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateZ(0) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateZ(0) scale(1.265);
  }
`;

const HoverDetailsAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(unset);
  }
`;

export const HoverContainer = styled.div<HoverContainerProps>`
  position: fixed;

  top: ${({ position }) => position.top}px;

  left: ${({ position }) => {
    if (!position.right || !position.left) {
      return;
    }

    if (position.left < 100) {
      return position.left + 10;
    }

    if (position.right > 1100) {
      return position.left - 120;
    }

    return position.left - 65;
  }}px;

  width: 25vw;
  height: 25vw;
  max-width: 365px;
  max-height: 375px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => lighten(0.05, theme.colors.backgroundSecondary)};
  box-shadow: 0px 0px 10px #000;
  border-radius: 5px;
  animation: ${HoverContainerAnimation} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 400ms
    both;
  text-shadow: 0px 0px 3px #000;
  z-index: 100;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HoverImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    max-height: 192px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
  }
`;

export const HoverDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  padding: 0 1rem;
  gap: 5px;
  animation: ${HoverDetailsAnimation} 0.4s 450ms both;

  p {
    font-size: clamp(12px, 1vw, 16px);
  }

  header {
    h4 {
      margin-bottom: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export const VideoWrapper = styled(YouTube)`
  position: relative;
  width: 100%;
  height: 20vw;
  max-height: 205px;
  border-radius: 5px 5px 0px 0px;
`;
