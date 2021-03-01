import { Poster, DetailsContainer, Title, Overview } from './styles';

const HeroSkeleton = () => {
  return (
    <>
      <Poster />
      <DetailsContainer>
        <Title />
        <Overview />
      </DetailsContainer>
    </>
  );
};

export default HeroSkeleton;
