import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100px;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;
