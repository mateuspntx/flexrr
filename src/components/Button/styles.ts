import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1.1rem;
  width: 100%;
  box-shadow: 0px 5px 50px -25px ${({ theme }) => theme.colors.orange};
  transition: box-shadow 1s ease;

  &:hover {
    box-shadow: 0px 5px 25px -15px ${({ theme }) => theme.colors.orange};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: unset;
  }
`;
