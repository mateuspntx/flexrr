import styled from 'styled-components';

export const WhatsPopular = styled.section`
  margin-bottom: 3.5rem;

  > h1 {
    font-size: 20px;
    margin-bottom: 15px;
    text-shadow: 0px 0px 5px #000000cf;
  }
`;

export const ActionGenre = styled.section`
  margin-bottom: 3.5rem;

  > h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const ComedyGenre = styled.section`
  margin-bottom: 3.5rem;

  > h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const WatchlistCarouselWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 520px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
