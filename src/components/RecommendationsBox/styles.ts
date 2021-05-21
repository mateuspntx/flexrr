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

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* margin: 0 auto; */
  gap: 1rem;
`;
