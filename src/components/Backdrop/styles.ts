import styled from 'styled-components';

interface BackdropProps {
  withBlur?: boolean;
  opacity: boolean;
  backdropHeight?: number;
}

interface BlurProps {
  blurWidth?: number;
  blurAmount?: number;
}

export const Backdrop = styled.div<BackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ backdropHeight }) => backdropHeight}px;
  overflow: hidden;
  transition: opacity 2s;
  opacity: ${({ opacity }) => (opacity ? 0 : 1)};
  user-select: none;
  z-index: -2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    ${({ withBlur }) =>
      withBlur
        ? ` background: #000000b8;
            backdrop-filter: blur(10px);`
        : `background: linear-gradient(270deg, black, #00000000);`}
    overflow: hidden;

    @media (max-width: 920px) {
      width: 100%;
      background: #00000050;
    }
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

  @media (max-width: 520px) {
    height: 420px;
  }
`;

export const Image = styled.img`
  width: 100vw;
  height: 620px;
  object-fit: cover;
  object-position: center top;
`;

export const Blur = styled.div<BlurProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(${({ blurAmount }) => blurAmount}px) brightness(60%);

  div {
    width: ${({ blurWidth }) => blurWidth}%;
    height: 100%;
    overflow: hidden;
  }
`;
