import styled from 'styled-components';

export const Bar = styled.div`
  position: absolute;
  width: 100vw;
  height: 3px;
  background: ${({ theme }) => theme.colors.orange};
  z-index: 1000;
`;

export const GradientBar = styled.div`
  position: absolute;
  width: 100vw;
  height: 50px;
  background: ${({ theme }) => theme.colors.gradients.orangeToTransparent};
  z-index: -1;
`;
