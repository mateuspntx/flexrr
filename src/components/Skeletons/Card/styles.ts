import styled from 'styled-components';

import { ShimmerEffect } from '../ShimmerEffect';

export const Poster = styled.div`
  max-width: 250px;
  width: 13vw;
  min-height: 250px;
  max-height: 375px;
  height: 20vw;
  min-height: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 25px -15px #000000;

  @media (max-width: 760px) {
    min-height: unset;
    min-width: 100px;
    width: 113px;
    height: 170.77px;
  }

  ${ShimmerEffect}
`;
