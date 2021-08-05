import styled from 'styled-components';
import { lighten } from 'polished';

import { OpacityAnimation } from '../../styles/animations';

export const Container = styled.div`
  position: relative;
  z-index: 100;

  > a {
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 60px;
  right: -10px;
  width: 250px;
  min-height: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-radius: 4px;
  z-index: -1;
  animation: ${OpacityAnimation} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
  box-shadow: 0px 2px 10px -5px #000;
  backdrop-filter: blur(20px);
`;

export const UsernameWrapper = styled.div`
  padding-bottom: 10px;
  word-wrap: break-word;
  box-shadow: 0px 2px 0px 0px
    ${({ theme }) => lighten(0.2, theme.colors.backgroundSecondary)};
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50px;
  cursor: pointer;
`;
