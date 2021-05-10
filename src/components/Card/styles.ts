import styled, { css } from 'styled-components';

interface ContainerProps {
  hoverAnimation: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: transform 0.6s ease-in-out;

  ${({ hoverAnimation }) =>
    hoverAnimation
      ? css`
          @media (min-width: 920px) {
            &:hover {
              transform: scale(1.08);
            }
          }
        `
      : null}
`;

export const PosterWrapper = styled.img`
  max-width: 150px;
  width: 100%;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0px 0px 25px -15px #000000;
`;

export const Details = styled.div`
  > h3 {
    max-width: 145px;
    width: 20vw;
    margin-top: 10px;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
