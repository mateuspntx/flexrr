import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
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

  @media (max-width: 500px) {
    margin: 0 auto;
    margin-bottom: 1rem;
    font-size: 20px;
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
