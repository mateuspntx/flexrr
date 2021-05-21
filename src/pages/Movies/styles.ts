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
