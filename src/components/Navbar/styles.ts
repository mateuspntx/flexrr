import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  color: ${({ theme }) => theme.colors.orange};

  @media (max-width: 500px) {
    margin-top: -15px;
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;

  a {
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: 500px) {
    margin: 10px auto;
    font-size: 20px;
  }
`;

export const MenuWrapper = styled.section`
  display: flex;
  height: 100%;

  > a {
    font-weight: 500;
    font-size: 18px;
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-around;
    margin: 0 auto;

    > a {
      margin-left: unset;
    }
  }
`;
