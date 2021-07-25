import styled from 'styled-components';

export const Container = styled.footer`
  padding: 0 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};

  .heart {
    color: red;
    font-size: 20px;
  }

  @media (max-width: 520px) {
    padding: 0 1rem;
    font-size: 12px;
  }
`;
