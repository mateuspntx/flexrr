import styled from 'styled-components';

export const ContentContainer = styled.section`
  margin: 1rem auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem 1rem;

  @media (max-width: 920px) {
    gap: 1rem;
  }
`;

export const Header = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 0px 0px 3px #000;

  > h1 {
    font-size: 3rem;
  }

  > h2 {
    font-size: 2rem;
    font-weight: 400;
  }

  @media (max-width: 520px) {
    > h1 {
      font-size: 2.5rem;
    }

    > h2 {
      font-size: 1.5rem;
    }
  }
`;

export const CardWrapper = styled.div`
  margin-right: 10px;

  @media (max-width: 520px) {
    margin-right: 5px;
  }
`;
