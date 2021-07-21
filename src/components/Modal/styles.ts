import styled, { keyframes } from 'styled-components';

import { ThemedScrollbar } from '../../styles/ThemedScrollbar';

export const ModalAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;

  z-index: 999;

  @media (max-width: 520px) {
    padding: 0;
  }

  ${ThemedScrollbar}
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  min-height: 400px;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 0px 20px -5px #000;
  animation: ${ModalAnimation} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;

  > button {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    border-radius: 3px;
    color: #fff;
    padding: 0 10px;
    font-size: 24px;
    font-weight: 600;
    background: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;
