import styled, { keyframes } from 'styled-components';

interface BackdropProps {
  backgroundSrc?: string;
}

const FadeIn = keyframes`
   0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Backdrop = styled.div<BackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 620px;
  background-image: url('${({ backgroundSrc }) => backgroundSrc}');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  animation: ${FadeIn} 3s;
  z-index: -2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 620px;
    background: #000000b8;
    backdrop-filter: blur(10px);
    overflow: hidden;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    height: 90px;
    background: ${({ theme }) => theme.colors.transparentToBlack};
    overflow: hidden;
  }
`;
