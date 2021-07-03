import styled from 'styled-components';

import { ShimmerEffect } from '../Skeletons/ShimmerEffect';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 80px - 360px);
  max-width: calc(1540px - 80px - 360px);
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1rem;
  border-radius: 10px;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const Photo = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100px;
  object-fit: cover;

  ${ShimmerEffect}

  @media (max-width: 920px) {
    width: 90px;
    height: 90px;
  }
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 920px) {
    font-size: 12px;
  }
`;

export const Character = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 920px) {
    font-size: 10px;
  }
`;

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  padding-bottom: 1rem;

  @media (max-width: 920px) {
    height: 150px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  > h1:nth-child(1) {
    margin-bottom: 1rem;
    font-size: 1.4em;
  }
`;
