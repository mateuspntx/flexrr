import styled from 'styled-components';
import { darken } from 'polished';

export const Input = styled.input`
  width: 100%;
  font-size: 1.1rem;
  padding: 1rem;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => darken(0.4, theme.colors.gray)};
  border-radius: 4px;
  outline: none;

  box-shadow: 0px 5px 20px -25px ${({ theme }) => darken(0.4, theme.colors.gray)};
  transition: box-shadow 1s ease;

  &:active,
  &:focus {
    box-shadow: 0px 5px 25px -15px ${({ theme }) => darken(0.4, theme.colors.gray)};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
