import styled from 'styled-components';

interface BackdropProps {
  backgroundSrc?: string;
}

export const Backdrop = styled.div<BackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 620px;
  background-image: url('${({ backgroundSrc }) => backgroundSrc}');
  background-size: cover;
  background-position: center;
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
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    height: 90px;
    background: ${({ theme }) => theme.colors.transparentToBlack};
  }
`;
