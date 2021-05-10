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
  /* background-color: ${({ theme }) => theme.colors.shimmerEffect}; */

  @media (max-width: 920px) {
    margin: auto;
    height: 35vh;
  }

  ${ShimmerEffect}
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 60%;
  max-width: 800px;

  @media (max-width: 920px) {
    gap: 1rem;
    margin-top: 2rem;
    width: 100vw;
  }
`;

export const Title = styled.div`
  width: 427px;
  height: 34px;
  border-radius: 5px;
  /* background-color: ${({ theme }) => theme.colors.shimmerEffect}; */

  @media (max-width: 920px) {
    width: 100%;
  }

  ${ShimmerEffect}
`;

export const Overview = styled.div`
  width: 100%;
  height: 150px;
  margin: 2rem 0;
  border-radius: 5px;
  /* background-color: ${({ theme }) => theme.colors.shimmerEffect}; */

  @media (max-width: 920px) {
    height: 100px;
  }

  ${ShimmerEffect}
`;

export const FeaturedImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 920px) {
    justify-content: center;
  }
`;

export const FeaturedImage = styled.div`
  max-width: 12rem;
  max-height: 105px;
  width: 13vw;
  height: 8vw;
  border-radius: 5px;
  box-shadow: 0px 0px 25px -8px #000000;

  @media (max-width: 920px) {
    width: 10rem;
    height: 85px;
  }

  @media (max-width: 300px) {
    width: 6rem;
    height: 75px;
  }

  ${ShimmerEffect}
`;
