import { darken } from 'polished';
import styled from 'styled-components';

import Button from '../Button';

export const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => darken(0.3, theme.colors.gray)};
`;
