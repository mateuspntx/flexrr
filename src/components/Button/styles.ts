import styled, { css } from 'styled-components';

interface ButtonsProps {
  variant?: 'transparent' | 'red' | 'orange';
}

const transparentVariant = css`
  background: ${({ theme }) => theme.colors.backgroundSecondary};

  color: ${({ theme }) => theme.colors.text};
`;

const redVariant = css`
  background: ${({ theme }) => theme.colors.red};
  box-shadow: 0px 5px 50px -25px ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    box-shadow: 0px 5px 25px -15px ${({ theme }) => theme.colors.red};
  }
`;

const orangeVariant = css`
  background: ${({ theme }) => theme.colors.orange};
  box-shadow: 0px 5px 50px -25px ${({ theme }) => theme.colors.orange};

  &:hover {
    box-shadow: 0px 5px 25px -15px ${({ theme }) => theme.colors.orange};
  }
`;

export const Button = styled.button<ButtonsProps>`
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  transition: box-shadow 1s ease, background-color 0.2s ease;

  &:disabled {
    opacity: 0.5;
    box-shadow: unset;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'transparent':
        return transparentVariant;
      case 'red':
        return redVariant;
      case 'orange':
        return orangeVariant;
      default:
        return orangeVariant;
    }
  }}
`;
