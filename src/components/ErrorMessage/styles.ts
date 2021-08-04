import styled from 'styled-components';

import { OpacityAnimation } from '../../styles/animations';

export const Container = styled.span`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.red};
  text-align: center;

  box-shadow: 0px 5px 50px -20px ${({ theme }) => theme.colors.red};
  transition: box-shadow 1s ease;

  &:hover {
    box-shadow: 0px 5px 25px -15px ${({ theme }) => theme.colors.red};
  }

  animation: ${OpacityAnimation} 0.5s ease;
`;
