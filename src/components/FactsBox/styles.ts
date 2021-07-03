import styled from 'styled-components';

export const Container = styled.section`
  max-width: 300px;
  min-width: 200px;
  width: 25vw;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1rem;
  border-radius: 10px;

  > p {
    margin-bottom: 1rem;
  }

  @media (max-width: 920px) {
    max-width: unset;
    width: 100%;
  }
`;
