import React from 'react';
import {
  Poster,
  DetailsContainer,
  Title,
  Overview,
  FeaturedImagesWrapper,
  FeaturedImage,
} from './styles';

const HeroSkeleton = () => {
  return (
    <>
      <Poster />
      <DetailsContainer>
        <Title />
        <Overview />
        <FeaturedImagesWrapper>
          <FeaturedImage />
          <FeaturedImage />
          <FeaturedImage />
        </FeaturedImagesWrapper>
      </DetailsContainer>
    </>
  );
};

export default HeroSkeleton;
