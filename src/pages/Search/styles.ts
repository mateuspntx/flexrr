import styled from 'styled-components';

export const Header = styled.div`
  > p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: 500px) {
    > h1 {
      font-size: 24px;
    }

    > p {
      font-size: 12px;
    }
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;

  > p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Footer = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    background: ${({ theme }) => theme.colors.orange};
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1rem;
  }
`;
