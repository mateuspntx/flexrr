import styled from 'styled-components';

import SearchIcon from '../../assets/images/search-icon.svg';

export const Container = styled.nav`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  color: ${({ theme }) => theme.colors.orange};

  .isActive {
    font-weight: bold;
  }

  @media (max-width: 500px) {
    margin-top: -15px;
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;

  a {
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: 500px) {
    margin: 10px auto;
    font-size: 20px;
  }
`;

export const MenuWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;

  > a {
    font-weight: 400;
    font-size: 18px;
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-around;
    margin: 0 auto;

    > a {
      margin-left: unset;
    }
  }
`;

export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    align-items: unset;
  }
`;

export const SearchInput = styled.input`
  width: 0px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  background: none;
  height: 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.orange};
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  opacity: 0;

  @media (min-width: 715px) {
    transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.orange};
    opacity: 0.7;
  }

  &:focus {
    width: 225px;
    opacity: 1;
    margin-left: 15px;
    padding: 0 10px;

    @media (max-width: 500px) {
      width: 80vw;
      margin-left: -25px;
      padding: 0 2rem;
      margin-bottom: 1rem;
    }
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  width: 25px;
  height: 25px;
  background-image: url(${SearchIcon});
  background-position: center;
  background-size: cover;

  &:focus + ${SearchInput} {
    width: 225px;
    opacity: 1;
    padding: 0 10px;

    @media (max-width: 500px) {
      width: 80vw;
      padding: 0 30px;
      margin-bottom: 1rem;
    }
  }

  &:focus {
    margin-right: 15px;

    @media (max-width: 500px) {
      margin-right: -25px;
      margin-bottom: 1rem;
    }
  }
`;
