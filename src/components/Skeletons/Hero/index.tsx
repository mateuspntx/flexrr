import {
  Poster,
  DetailsContainer,
  Title,
  Overview,
  FeaturedImagesWrapper,
  FeaturedImage,
  FeaturedWrapper,
  FeaturedTitle,
  FeaturedOverview,
} from './styles';

interface HeroSkeletonProps {
  variant: 'simple' | 'full';
}

const HeroSkeleton = ({ variant }: HeroSkeletonProps) => {
  return (
    <>
      {variant === 'full' && (
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
      )}

      {variant === 'simple' && (
        <>
          <FeaturedWrapper>
            <FeaturedTitle />
            <FeaturedOverview />
          </FeaturedWrapper>
        </>
      )}
    </>
  );
};

export default HeroSkeleton;
