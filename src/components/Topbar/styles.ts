import styled from 'styled-components';

export const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.colors.orange};
  z-index: 1000;
`;

export const GradientBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.gradients.orangeToTransparent};
  z-index: -1;
`;
