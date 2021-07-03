import { css } from 'styled-components';

export const ShimmerEffect = css`
  background-image: linear-gradient(
    -90deg,
    ${({ theme }) => theme.colors.shimmerEffect} 0%,
    #151515 50%,
    ${({ theme }) => theme.colors.shimmerEffect} 100%
  );

  background-size: 400% 400%;
  animation: shimmer 2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
