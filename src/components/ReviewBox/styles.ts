import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 10px;
  padding: 1rem;

  > h1:nth-child(1) {
    font-size: 1.4em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100px;
`;

export const Name = styled.h1`
  margin-bottom: 5px;
`;

export const Text = styled.p`
  white-space: pre-wrap;
  max-width: 800px;

  @media (max-width: 1200px) {
    width: 45vw;
  }

  @media (max-width: 920px) {
    display: block;
    display: -webkit-box;
    max-height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  border: none;
  border-radius: 100px;

  > img {
    width: 30px;
  }
`;
