import styled from 'styled-components';

import { ShimmerEffect } from '../Skeletons/ShimmerEffect';

export const Container = styled.section`
  display: flex;
  margin: 2em 0;
  height: 455px;
  flex-wrap: wrap;

  @media (max-width: 920px) {
    margin: auto;
    height: unset;
  }
`;

export const PosterContainer = styled.div`
  @media (max-width: 920px) {
    margin: auto;
  }
`;

export const Poster = styled.img`
  max-width: 300px;
  min-width: 200px;
  max-height: 450px;
  min-height: 300px;
  width: 25vw;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 25px -8px #000000;
  object-fit: cover;

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

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  > h3 {
    font-size: 20px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.gray};
    margin-left: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 10px;
`;

export const DetailsHeader = styled.div`
  margin-top: 0;
`;

export const FactsWrapper = styled.ul`
  display: flex;

  > li {
    list-style-position: inside;
    padding-right: 15px;

    &:nth-child(1) {
      list-style-type: none;
      margin-bottom: 6px;
    }
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;

    > li {
      &:nth-child(2) {
        list-style-type: none;
      }
    }
  }
`;

export const Overview = styled.p`
  margin: 2rem 0;
  font-size: 18px;

  @media (max-width: 920px) {
    font-size: 16px;
  }
`;

export const FeaturedImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 920px) {
    justify-content: center;
  }
`;

export const FeaturedImage = styled.img`
  max-width: 12rem;
  width: 13vw;
  border-radius: 5px;
  box-shadow: 0px 0px 25px -8px #000000;

  ${ShimmerEffect}

  @media (max-width: 920px) {
    width: 10rem;
  }

  @media (max-width: 300px) {
    width: 6rem;
  }
`;

export const Featured = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem 0;
  margin-bottom: 1rem;
  text-shadow: 0px 0px 5px #000000cf;

  > h1:nth-child(1) {
    font-size: 3em;

    @media (max-width: 920px) {
      font-size: 2rem;
      width: 100%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  > p {
    min-width: 200px;
    max-width: 500px;
    width: 100%;
    text-align: right;

    @media (max-width: 920px) {
      text-align: center;
      font-size: 14px;
      font-weight: 100;
    }
  }

  @media (max-width: 920px) {
    align-items: center;
  }
`;
