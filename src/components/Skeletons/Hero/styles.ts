import { ShimmerEffect } from '../ShimmerEffect';

import styled from 'styled-components';

export const Poster = styled.div`
  max-width: 300px;
  min-width: 200px;
  max-height: 450px;
  width: 25vw;
  height: 42vw;
  border-radius: 10px;
  box-shadow: 0px 0px 25px -8px #000000;
  background-color: ${({ theme }) => theme.colors.shimmerEffect};

  @media (max-width: 920px) {
    margin: auto;
    height: 35vh;
  }

  ${ShimmerEffect}
`;

export const DetailsContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  max-width: 800px;

  @media (max-width: 920px) {
    margin-top: 2rem;
    width: 100vw;
  }
`;

export const Title = styled.div`
  width: 427px;
  height: 34px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shimmerEffect};

  @media (max-width: 920px) {
    width: 100%;
  }

  ${ShimmerEffect}
`;

export const Overview = styled.div`
  width: 100%;
  height: 200px;
  margin: 2rem 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shimmerEffect};

  @media (max-width: 920px) {
    height: 100px;
  }

  ${ShimmerEffect}
`;
