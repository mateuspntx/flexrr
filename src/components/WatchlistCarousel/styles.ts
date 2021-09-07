import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin-right: 10px;

  @media (max-width: 520px) {
    margin-right: 5px;

    &:nth-last-child(1) {
      padding-right: 15px;
    }
  }
`;
