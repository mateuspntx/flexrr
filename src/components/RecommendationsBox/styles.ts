import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  > h1:nth-child(1) {
    font-size: 1.4em;
    margin-bottom: 1rem;
  }
`;

export const CardWrapper = styled.div`
  padding-right: 10px;

  @media (max-width: 520px) {
    &:nth-last-child(1) {
      padding-right: 15px;
    }
  }
`;
