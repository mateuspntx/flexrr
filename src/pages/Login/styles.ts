import styled from 'styled-components';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.div`
  max-width: 350px;
  margin: 5vw auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  > p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
  width: 100%;

  > p {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  margin-top: 1rem;
  font-size: 1.1rem;
  padding: 1rem;
`;
