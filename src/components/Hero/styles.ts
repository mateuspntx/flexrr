import styled from 'styled-components';

interface BackdropProps {
  backgroundSrc?: string;
}

export const Container = styled.section`
  display: flex;
  margin: 3em 0;
  flex-wrap: wrap;
`;

export const Backdrop = styled.div<BackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 620px;
  background-image: url('${({ backgroundSrc }) => backgroundSrc}');
  background-size: cover;
  background-position: center;
  z-index: -2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 620px;
    background: #000000b8;
    backdrop-filter: blur(10px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    height: 90px;
    background: ${({ theme }) => theme.colors.transparentToBlack};
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
  width: 25vw;
  border-radius: 10px;
  box-shadow: 0px 0px 25px -8px #000000;
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
    }
  }
`;

export const Overview = styled.p`
  margin: 2rem 0;
  font-size: 18px;
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

  @media (max-width: 920px) {
    width: 10rem;
  }

  @media (max-width: 300px) {
    width: 6rem;
  }
`;
