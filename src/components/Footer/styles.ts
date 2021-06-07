import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;
