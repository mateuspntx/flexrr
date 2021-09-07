import styled, { css, keyframes } from 'styled-components';
import { lighten } from 'polished';
import YouTube from 'react-youtube';

import { ShimmerEffect } from '../Skeletons/ShimmerEffect';

import { OpacityAnimation } from '../../styles/animations';

import { CardPosition } from './index';

interface HoverContainerProps {
  position: CardPosition;
  playHoverEnterAnimation: boolean;
  playHoverLeaveAnimation: boolean;
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
  align-items: center;

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
    margin-top: 5px;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-size: clamp(12px, 1.2vw, 18px);
  }
`;

const HoverContainerAnimationEnter = keyframes`
  0% {
    opacity: 0;
    transform: translateZ(0) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateZ(0) scale(1.265);
  }
`;

const HoverContainerAnimationLeave = keyframes`
  0% {
    opacity: 1;
    transform: translateZ(0) scale(1.265);
  }
  100% {
    opacity: 0;
    transform: translateZ(0) scale(0.95);
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

  ${({ position }) => {
    if (!position.top || !position.bottom) {
      return;
    }

    if (position.top <= window.innerHeight / 8) {
      return css`
        top: ${position.top + 20}px;
      `;
    }

    if (
      document.body.offsetWidth <= 1900 &&
      position.bottom >= window.innerHeight - 170
    ) {
      return css`
        top: ${position.top - 160}px;
      `;
    }

    return css`
      top: ${position.top - 25}px;
    `;
  }};

  ${({ position }) => {
    if (!position.right || !position.left) {
      return;
    }

    if (
      document.body.offsetWidth <= 1910 &&
      position.left < document.body.offsetWidth / 6
    ) {
      return css`
        left: ${position.left - 20}px;
        transform-origin: 0%;
      `;
    }

    if (position.left < 100) {
      return css`
        left: ${position.left - 20}px;
        transform-origin: 0%;
      `;
    }

    if (
      document.body.offsetWidth >= 1910 &&
      position.right > document.body.offsetWidth - 200
    ) {
      return css`
        left: ${position.left - 95}px;
        transform-origin: 100%;
      `;
    }

    if (position.right > document.body.offsetWidth - 200) {
      return css`
        left: ${position.left - 135}px;
        transform-origin: 100%;
      `;
    }

    return css`
      left: ${position.left - 65}px;
    `;
  }};

  width: 25vw;
  height: 35vw;
  max-width: 365px;
  max-height: 395px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => lighten(0.05, theme.colors.backgroundSecondary)};
  box-shadow: 0px 0px 10px #000;
  border-radius: 5px;
  text-shadow: 0px 0px 3px #000;
  z-index: 100;

  ${({ playHoverEnterAnimation }) =>
    playHoverEnterAnimation &&
    css`
      animation: ${HoverContainerAnimationEnter} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
        1ms both;
    `}

  ${({ playHoverLeaveAnimation }) =>
    playHoverLeaveAnimation &&
    css`
      animation: ${HoverContainerAnimationLeave} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
        1ms both;
    `}

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HoverImageContainer = styled.div`
  width: 100%;
`;

export const HoverDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 1rem;
  gap: 5px;
  animation: ${HoverDetailsAnimation} 0.4s 30ms both;

  p {
    font-size: clamp(12px, 1vw, 16px);
  }

  header {
    h4 {
      margin-top: 20px;
      margin-bottom: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      margin-top: 25px;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  footer {
    position: absolute;
    width: 90%;
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export const WatchlistButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
`;

export const VideoWrapper = styled(YouTube)<{ playVideoOpacityAnimation?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vw;
  max-height: 205px;
  border-radius: 5px 5px 0px 0px;
  opacity: 0;

  ${({ playVideoOpacityAnimation }) =>
    playVideoOpacityAnimation &&
    css`
      animation: ${OpacityAnimation} 0.4s 0ms both;
    `}
`;

export const FallbackBackdrop = styled.div`
  position: relative;
  width: 100%;
  height: 20vw;
  max-height: 205px;

  img {
    width: 100%;
    height: 100%;
    max-height: 205px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
  }
`;
