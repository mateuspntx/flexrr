import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  color: ${({ theme }) => theme.colors.orange};
`;

export const Logo = styled.h1`
  font-size: 24px;

  a {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const MenuWrapper = styled.section`
  a {
    font-weight: bold;
    font-size: 18px;
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.orange};
  }
`;
