import styled from 'styled-components';

interface ContainerProps {
  colsNumber: number;
  gapNumber?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ colsNumber }) => colsNumber}, 1fr);
  gap: ${({ gapNumber }) => gapNumber || '40px 16px'};

  @media (max-width: 920px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px 10px;
  }
`;
