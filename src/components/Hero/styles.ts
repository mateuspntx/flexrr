import styled from 'styled-components';
import { darken } from 'polished';

import { ShimmerEffect } from '../Skeletons/ShimmerEffect';

export const Container = styled.section`
  display: flex;
  margin: 2em 0;
  height: 455px;
  flex-wrap: wrap;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 920px) {
    margin: auto;
    height: unset;
  }
`;

export const PosterContainer = styled.div<{ posterSrc?: string }>`
  position: relative;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('${({ posterSrc }) => posterSrc}');
    filter: blur(1.5rem);
    transform: scale(0.9);
  }

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

  > p {
    font-size: 20px;
    font-weight: normal;
    color: ${({ theme }) => darken(0.2, theme.colors.text)};
    margin-left: 15px;
    margin-top: -5px;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;

    > p {
      font-size: 16px;
      margin-bottom: 10px;
      margin-left: 0;
    }
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 10px;

  @media (max-width: 520px) {
    font-size: 28px;
  }
`;

export const DetailsHeader = styled.div`
  margin-top: 0;
`;

export const FactsWrapper = styled.ul`
  display: flex;
  color: ${({ theme }) => darken(0.2, theme.colors.text)};

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

export const ButtonsWrapper = styled.div`
  margin-top: 20px;
  transform-origin: 0px;
  transform: scale(1.3);

  @media (max-width: 520px) {
    transform: unset;
  }
`;

export const Overview = styled.p`
  margin: 2rem 0;
  font-size: 16px;
`;

export const FeaturedImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;

  @media (max-width: 920px) {
    justify-content: center;
  }

  img {
    margin-right: 10px;
  }
`;

export const MoreImagesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 0 3rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary}99;
  border: none;
  border-radius: 5px;
  backdrop-filter: blur(5px);

  img {
    width: 2rem;
    margin-right: unset;
  }
`;

export const FeaturedImage = styled.img`
  max-width: 12rem;
  width: 13vw;
  border-radius: 5px;
  box-shadow: 0px 0px 25px -8px #000000;
  cursor: pointer;

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
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 10rem 0;
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
    height: 300px;
    padding: 2rem;
  }
`;
