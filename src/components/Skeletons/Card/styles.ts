import styled from 'styled-components';

import { ShimmerEffect } from '../ShimmerEffect';

export const Poster = styled.div`
  max-width: 150px;
  max-height: 225px;
  width: 100%;
  height: 100vh;
  border-radius: 5px;
  box-shadow: 0px 0px 25px -15px #000000;

  @media (max-width: 920px) {
    min-height: 170px;
    width: 100%;
    height: 90%;
    margin-bottom: 10px;
  }

  @media (max-width: 420px) {
    width: 113px;
    height: 170.77px;
    margin-bottom: 10px;
  }

  ${ShimmerEffect}
`;
