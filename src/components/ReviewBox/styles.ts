import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { ThemedScrollbar } from '../../styles/ThemedScrollbar';

import {
  OpacityAnimation,
  FadeOutToLeftAnimation,
  FadeOutToRightAnimation,
} from '../../styles/animations';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;

  > h1:nth-child(1) {
    font-size: 1.4em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  animation: ${OpacityAnimation} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100px;
`;

export const Name = styled.h1`
  margin-bottom: 5px;

  @media (max-width: 920px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  white-space: pre-wrap;
  max-width: 800px;
  max-height: 500px;
  height: 100%;
  overflow: auto;
  padding-right: 20px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (min-width: 520px) {
    ${ThemedScrollbar}
  }

  @media (max-width: 920px) {
    font-size: 14px;
    width: 100%;
    max-height: 400px;
    padding-right: 0px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 20px;
      background: ${({ theme }) => theme.colors.transparentToBlack};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.backgroundColor};
  border: none;
  border-radius: 100px;
  transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;

  > img {
    width: 30px;
  }

  > p {
    padding: 0 10px;
    font-size: 14px;
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;
    background: ${({ theme }) => lighten(0.05, theme.colors.backgroundColor)};
  }
`;

export const ContentWrapper = styled.div<{
  playPrevAnimation?: boolean;
  playNextAnimation?: boolean;
  playOpacityAnimation?: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;

  animation: ${OpacityAnimation} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;

  ${({ playPrevAnimation }) =>
    playPrevAnimation &&
    css`
      animation: ${FadeOutToRightAnimation} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
    `}

  ${({ playNextAnimation }) =>
    playNextAnimation &&
    css`
      animation: ${FadeOutToLeftAnimation} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
    `}

  @media (max-width: 920px) {
    flex-wrap: wrap;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  min-height: 500px;
  height: 60vh;
`;
