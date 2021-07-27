import { keyframes } from 'styled-components';

export const OpacityAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const FadeOutToLeftAnimation = keyframes`
  0% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
`;

export const FadeOutToRightAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0px);
  }

  100% {
    opacity: 0;
    transform: translateX(20px);
  }
`;
