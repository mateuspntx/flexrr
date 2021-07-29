import { memo, useRef } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import * as S from './styles';

const Navbar = () => {
  const history = useHistory();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();

    searchInputRef.current?.value &&
      history.push(`/search?q=${searchInputRef.current.value}`);
  };

  return (
    <S.Container>
      <S.Logo>
        <Link to="/">
          <h1>Flexrr</h1>
        </Link>
      </S.Logo>
      <S.MenuWrapper>
        <S.SearchWrapper onSubmit={(e) => handleSearch(e)}>
          <S.SearchButton type="button" onClick={() => handleSearch()} />
          <S.SearchInput placeholder="Movies, TV Shows, People..." ref={searchInputRef} />
        </S.SearchWrapper>

        <NavLink to="/" exact activeClassName="isActive">
          Discover
        </NavLink>
        <NavLink to="/movie" exact activeClassName="isActive">
          Movies
        </NavLink>
        <NavLink to="/tv" exact activeClassName="isActive">
          TV Shows
        </NavLink>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default memo(Navbar);
