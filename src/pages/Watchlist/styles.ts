import styled from 'styled-components';

import { OpacityAnimation } from '../../styles/animations';

import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const HeaderTop = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderBottom = styled.div`
  height: 1rem;

  > p {
    color: ${({ theme }) => theme.colors.textSecondary};
    animation: ${OpacityAnimation} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;
  }
`;

export const StyledButton = styled(Button)`
  min-width: 70px;
  max-width: 100px;
  font-size: 16px;
  padding: 5px;

  &:first-child {
    margin-right: 1rem;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  text-align: center;
  animation: ${OpacityAnimation} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;

  > p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;
