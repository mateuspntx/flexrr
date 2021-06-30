import styled from 'styled-components';

import { ShimmerEffect } from '../ShimmerEffect';

export const Poster = styled.div`
  max-width: 150px;
  max-height: 225px;
  width: 100%;
  height: calc(100vw - 300px);
  border-radius: 5px;
  box-shadow: 0px 0px 25px -15px #000000;

  @media (max-width: 420px) {
    min-height: unset;
    min-width: 100px;
    width: 113px;
    height: 170.77px;
  }

  ${ShimmerEffect}
`;
